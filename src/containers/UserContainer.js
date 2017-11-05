import React from 'react';
import {connect} from 'react-redux';
import {Container, Tab, Feed, Item, Button, Icon, List} from 'semantic-ui-react'



class UserContainer extends React.Component{


    getNotificationFeed = ()=> {

        console.log('create feeds')

        return this.props.peopleInfo.notificationList.map((value, index ,array)=>{

            console.log(value.type)

            switch (value.type){
                //关注的人发相册
                case 0:
                    return (
                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <a>{value.makerName}</a> 发表了相册 <a>{value.itemName}</a>
                                </Feed.Summary>
                                <Feed.Date>
                                    {value.createdAt}
                                </Feed.Date>
                            </Feed.Content>
                        </Feed.Event>
                    );
                    break;
                //关注的人发帖子
                case 1:
                    return (
                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <a>{value.makerName}</a> 发表了帖子 <a>{value.itemName}</a>
                                </Feed.Summary>
                                <Feed.Date>
                                    {value.createdAt}
                                </Feed.Date>
                            </Feed.Content>
                        </Feed.Event>
                    );
                    break;
                //相册被评论
                case 3:
                    return (
                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    你的相册 <a>{value.itemName}</a> 被<a>{value.makerName}</a>评论了
                                </Feed.Summary>
                                <Feed.Date>
                                    {value.createdAt}
                                </Feed.Date>
                            </Feed.Content>
                        </Feed.Event>
                    );
                    break;
                //帖子被评论
                case 4:
                    return (
                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    你的帖子 <a>{value.itemName}</a> 被<a>{value.makerName}</a>评论了
                                </Feed.Summary>
                                <Feed.Date>
                                    {value.createdAt}
                                </Feed.Date>
                            </Feed.Content>
                        </Feed.Event>
                    );
                    break;
                //帖子回复被回复
                case 5:
                    return (
                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    你在帖子 <a>{value.itemName}</a> 的回复被<a>{value.makerName}</a>评论了
                                </Feed.Summary>
                                <Feed.Date>
                                    {value.createdAt}
                                </Feed.Date>
                            </Feed.Content>
                        </Feed.Event>
                    );
                    break;
                default:
                    break;
            }

        })
    }




    render(){

        const {userInfo} = this.props;

        const panes = [
            { menuItem: '个人信息',
                render: () => <Tab.Pane attached={false} >
                                    <Item.Group>
                                        <Item>
                                            <Item.Image size='tiny' src={userInfo.userAvatar} />
                                            <Item.Content verticalAlign='middle'>
                                                <Item.Header>
                                                    {userInfo.userName}
                                                </Item.Header>

                                                {
                                                    userInfo.hasFollowed?
                                                        <Item.Extra>
                                                            <Button  floated='right'>
                                                                取消关注
                                                                <Icon name='delete' />
                                                            </Button>
                                                        </Item.Extra>
                                                        :
                                                        <Item.Extra>
                                                            <Button color='teal' floated='right'>
                                                                关注Ta
                                                                <Icon name='checkmark' />
                                                            </Button>
                                                        </Item.Extra>
                                                }

                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Tab.Pane>
            },
            { menuItem: 'Ta的相册',
                render: () => <Tab.Pane attached={false}>
                    <Item.Group divided link>
                        {
                            userInfo.albumList.map((value, index, array)=>{
                                return (
                                    <Item key={index} >
                                        <Item.Image size='tiny' src={value.coverUrl} />

                                        <Item.Content>
                                            <Item.Header>{value.name}</Item.Header>
                                            <Item.Description>
                                                <Icon name='star' color="yellow" />
                                                <span>{value.starNum}</span>
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>
                                );
                            })
                        }
                    </Item.Group>
                </Tab.Pane>
            },
            { menuItem: 'Ta的帖子',
                render: () => <Tab.Pane attached={false} >
                    <List divided relaxed>

                        {
                            (userInfo.postList===undefined||userInfo.postList.length===0)?
                                <Message>
                                    <Message.Header>
                                        暂无帖子
                                    </Message.Header>
                                </Message>
                                :
                                userInfo.postList.map((value, index, array)=>{
                                    return (
                                        <List.Item key={index}>
                                            <List.Content>
                                                <List.Header as='a'>{value.postName}</List.Header>
                                                <List.Description style={{float: 'right'}}>{value.answerNum + '回复'+'   ' + '发表于'+value.createdAt + ' '}</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    );
                                })

                        }
                    </List>
                </Tab.Pane>
            },
        ]

        return(
            <Container>
                <Tab  menu={{ secondary: true, pointing: true, color:'teal' }} panes={panes} />
            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        userInfo : state.userInfo,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showLoginModal: () => {
            dispatch({
                type: 'SHOW_LOGIN_MODAL',
            });
        },
        closeLoginModal: () => {
            dispatch({
                type: 'CLOSE_LOGIN_MODAL',
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
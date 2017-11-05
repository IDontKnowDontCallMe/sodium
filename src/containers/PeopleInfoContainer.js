import React from 'react';
import {connect} from 'react-redux';
import {Container, Tab, Feed, Item, Button, Icon} from 'semantic-ui-react';
import {Redirect } from 'react-router-dom'



class PeopleInfoContainer extends React.Component{


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

        const panes = [
            { menuItem: '动态',
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}><Feed>{this.getNotificationFeed()}</Feed></Tab.Pane>
            },
            { menuItem: '我关注的人',
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}>
                                    <Item.Group divided>
                                        {
                                            this.props.peopleInfo.followingsList.map((value, index, array)=>{
                                                return (
                                                    <Item key={index}>
                                                        <Item.Image size='tiny' src={value.avatar} />
                                                        <Item.Content>
                                                            <Item.Header>{value.name}</Item.Header>
                                                            <Item.Extra>
                                                                <Button color="teal" floated='right'>
                                                                    取消关注
                                                                    <Icon name='delete' />
                                                                </Button>
                                                            </Item.Extra>
                                                        </Item.Content>
                                                    </Item>
                                                );
                                            })
                                        }
                                    </Item.Group>
                                </Tab.Pane>
            },
            { menuItem: '关注我的人',
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}>
                    <Item.Group divided>
                        {
                            this.props.peopleInfo.followingsList.map((value, index, array)=>{
                                return (
                                    <Item key={index}>
                                        <Item.Image size='tiny' src={value.avatar} />
                                        <Item.Content>
                                            <Item.Header>{value.name}</Item.Header>
                                        </Item.Content>
                                    </Item>
                                );
                            })
                        }
                    </Item.Group>
                                </Tab.Pane>
            },
        ]

        return(
            this.mainInfo.hasLogined?
                <Container>
                    <Tab  menu={{ secondary: true, pointing: true, color:'teal' }} panes={panes} />
                </Container>
                :
                <Redirect to='/'/>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        peopleInfo : state.peopleInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfoContainer);
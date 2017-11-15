import React from 'react';
import {connect} from 'react-redux';
import {Container, Tab, Feed, Item, Button, Icon, List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



class UserContainer extends React.Component{





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
                    <Item.Group divided >
                        {
                            userInfo.albumList.map((value, index, array)=>{
                                return (
                                    <Item key={index} >
                                        <Item.Image size='tiny' src={value.coverUrl} />

                                        <Item.Content>
                                            <Item.Header><Link to={'/album/'+value.albumId}>{value.name}</Link></Item.Header>
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
                                                <List.Header ><Link to={'/post/'+value.postId}>{value.postName}</Link></List.Header>
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
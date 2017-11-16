import React from 'react';
import {connect} from 'react-redux';
import {Container, Tab, Feed, Item, Button, Icon, List,Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import LoadingDimmer from '../components/LoadingDimmer';



class UserContainer extends React.Component{



    componentDidMount(){

        this.props.loadUserInfo(this.props.match.params.userId)
    }

    addFollowingMethod = (followingId) =>{

        return ()=>{
            this.props.addFollowing(followingId);
        }

    }

    cancelFollowingMethod = (followingId) =>{

        return ()=>{
            this.props.cancelFollowing(followingId);
        }

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
                                                            <Button  floated='right' onClick={this.cancelFollowingMethod(userInfo.userId)}>
                                                                取消关注
                                                                <Icon name='delete' />
                                                            </Button>
                                                        </Item.Extra>
                                                        :
                                                        <Item.Extra>
                                                            <Button color='teal' floated='right' onClick={this.addFollowingMethod(userInfo.userId)}>
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
                    {
                        userInfo.albumList===undefined || userInfo.albumList.length===0?
                            <Message>
                                <Message.Header>
                                    Ta没有发布过相册
                                </Message.Header>
                            </Message>
                            :
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

                    }
                </Tab.Pane>
            },
            { menuItem: 'Ta的帖子',
                render: () => <Tab.Pane attached={false} >
                    {
                        (userInfo.postList===undefined||userInfo.postList.length===0)?
                            <Message>
                                <Message.Header>
                                    Ta没有发布过帖子
                                </Message.Header>
                            </Message>
                            :
                            <List divided relaxed>
                                {
                                    userInfo.postList.map((value, index, array) => {
                                        return (
                                            <List.Item key={index}>
                                                <List.Content>
                                                    <List.Header><Link
                                                        to={'/post/' + value.postId}>{value.postName}</Link></List.Header>
                                                    <List.Description
                                                        style={{float: 'right'}}>{value.answerNum + '回复' + '   ' + '发表于' + value.createdAt + ' '}</List.Description>
                                                </List.Content>
                                            </List.Item>
                                        );
                                    })
                                }
                            </List>
                    }
                </Tab.Pane>
            },
        ]

        return(
            <Container>
                <LoadingDimmer
                    active={userInfo.userInfoLoading}
                >
                <Tab  menu={{ secondary: true, pointing: true, color:'teal' }} panes={panes} />
                </LoadingDimmer>
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
        loadUserInfo: (userId)=>{
            dispatch({
                type: 'LOAD_USER_INFO',
                payload: {userId:userId}
            });
        },

        cancelFollowing: (followingId)=>{
            dispatch({
                type: 'CANCEL_FOLLOWING',
                payload: {followingId:followingId},
            });
        },

        addFollowing: (followingId)=>{
            dispatch({
                type: 'ADD_FOLLOWING',
                payload: {followingId:followingId},
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
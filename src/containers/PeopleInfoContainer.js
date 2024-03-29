import React from 'react';
import {connect} from 'react-redux';
import {Container, Tab, Feed, Item, Button, Icon, Message} from 'semantic-ui-react';
import {Redirect, Link } from 'react-router-dom';
import LoadingDimmer from '../components/LoadingDimmer'



class PeopleInfoContainer extends React.Component{


    componentWillMount(){
        this.props.loadPeopleInfo();

    }

    cancelFollowingMethod = (followingId)=>{

        return ()=>{
            this.props.cancelFollowing(followingId);
        }

    }


    getNotificationFeed = ()=> {

        //console.log('create feeds')

        return this.props.peopleInfo.notificationList.map((value, index ,array)=>{

            //console.log(value.type)

            switch (value.type){
                //关注的人发相册
                case 0:
                    return (

                        <Feed.Event key={index}>
                            <Feed.Label image={value.makerAvatar} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <Link to={'/user/'+value.makerId}>{value.makerName}</Link> 发表了相册 <Link to={'/album/'+value.itemId}>{value.itemName}</Link>
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
                                    <Link to={'/user/'+value.makerId}>{value.makerName}</Link> 发表了帖子 <Link to={'/post/'+value.itemId}>{value.itemName}</Link>
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
                                    你的相册 <Link to={'/album/'+value.itemId}>{value.itemName}</Link> 被<Link to={'/user/'+value.makerId}>{value.makerName}</Link>评论了
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
                                    你的帖子 <Link to={'/post/'+value.itemId}>{value.itemName}</Link> 被<Link to={'/user/'+value.makerId}>{value.makerName}</Link>评论了
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
                                    你在帖子 <Link to={'/post/'+value.itemId}>{value.itemName}</Link> 的回复被<Link to={'/user/'+value.makerId}>{value.makerName}</Link>评论了
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
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}>
                    {
                        this.props.peopleInfo.notificationList.length===0?
                            <Message>
                                <Message.Header>
                                    暂无动态
                                </Message.Header>
                            </Message>
                            :
                        <Feed>
                            {this.getNotificationFeed()}
                        </Feed>
                    }
                            </Tab.Pane>
            },
            { menuItem: '我关注的人',
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}>
                    {
                        this.props.peopleInfo.followingsList.length===0?
                            <Message>
                                <Message.Header>
                                    暂无我关注的人
                                </Message.Header>
                            </Message>
                            :
                            <Item.Group divided>
                                {
                                    this.props.peopleInfo.followingsList.map((value, index, array) => {
                                        return (
                                            <Item key={index}>
                                                <Item.Image size='tiny' src={value.avatar}/>
                                                <Item.Content>
                                                    <Item.Header>
                                                        <Link to={'/user/' + value.id}>
                                                            {value.name}
                                                            </Link>
                                                    </Item.Header>
                                                    <Item.Extra>
                                                        <Button color="teal" floated='right'
                                                                onClick={this.cancelFollowingMethod(value.id)}>
                                                            取消关注
                                                            <Icon name='delete'/>
                                                        </Button>
                                                    </Item.Extra>
                                                </Item.Content>
                                            </Item>
                                        );
                                    })
                                }
                            </Item.Group>
                    }
                                </Tab.Pane>
            },
            { menuItem: '关注我的人',
                render: () => <Tab.Pane attached={false} style={{minHeight:400}}>
                    {
                        this.props.peopleInfo.followersList.length===0?
                            <Message>
                                <Message.Header>
                                    暂无关注我的人
                                </Message.Header>
                            </Message>
                            :
                        <Item.Group divided>
                            {
                                this.props.peopleInfo.followersList.map((value, index, array)=>{
                                    return (
                                        <Item key={index} >
                                            <Item.Image size='tiny' src={value.avatar} />
                                            <Item.Content>
                                                <Item.Header><Link to={'/user/'+value.id}>{value.name}</Link></Item.Header>
                                            </Item.Content>
                                        </Item>
                                    );
                                })
                            }
                        </Item.Group>
                    }
                                </Tab.Pane>
            },
        ]

        return(
            this.props.mainInfo.hasLogined?
                <Container>
                    <LoadingDimmer active={this.props.peopleInfo.peopleInfoLoading}>
                        <Tab  menu={{ secondary: true, pointing: true, color:'teal' }} panes={panes} />
                    </LoadingDimmer>
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
        loadPeopleInfo: ()=>{
            dispatch({
                type: 'LOAD_PEOPLE_INFO'
            });
        },

        cancelFollowing: (followingId)=>{
            dispatch({
                type: 'CANCEL_FOLLOWING',
                payload: {followingId:followingId},
            });
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfoContainer);
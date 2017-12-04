import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter} from 'react-router-dom'
import {Container, Segment,Dropdown, Image, Menu, Grid, List, Header} from 'semantic-ui-react'

import LoginRegisterModal from '../components/LoginRegisterModal';
import MainMenu from '../components/MainMenu'

import PhotoAreaContainer from './PhotoAreaContainer';
import AlbumDisplayContainer from './AlbumDisplayContainer';
import CreateAlbumContainer from './CreateAlbumContainer';
import CreatePostContainer from './CreatePostContainer';
import PostAreaContainer from './PostAreaContainer';
import PostDetailContainer from './PostDetailContainer';
import HomePageContainer from './HomePageContainer';
import PeopleInfoContainer from './PeopleInfoContainer';
import UserContainer from './UserContainer';
import CreateVideoContainer from './CreateVideoContainer';
import VideoPlayerContainer from './VideoPlayerContainer';


class MainContainer extends React.Component{

    constructor(){
        super();

    }

    hasTryAutoLogin = false

    render(){

        if(!this.hasTryAutoLogin){
            //尝试用cookie自动登录
            console.log('auto try login')
            this.props.tryLogin();
            this.hasTryAutoLogin = true
        }

        return(
            <div>
                <LoginRegisterModal
                    isOpen={this.props.mainInfo.showLoginModal}
                    onClose={this.props.closeLoginModal}
                    onClickLogin={this.props.loginUser}
                    onClickRegister={this.props.registerUser}
                />
                <MainMenu
                    hasLogined={this.props.mainInfo.hasLogined}
                    userName={this.props.mainInfo.userName}
                    showLoginModal={this.props.showLoginModal}
                    avatarUrl={this.props.mainInfo.userAvatar}
                    onClickLogout={()=>{this.props.logoutUser(this.props.mainInfo.userId)}}
                />

                <Container text style={{ marginTop: '5em', minHeight:750}}>
                    <Switch>
                        <Route path="/user/:userId"  component={UserContainer}/>
                        <Route path="/post/:postId"  component={PostDetailContainer}/>
                        <Route path="/album/:albumId"  component={AlbumDisplayContainer}/>
                        <Route path="/"   exact component={HomePageContainer}/>
                        <Route path="/photoArea" exact  component={PhotoAreaContainer}/>
                        <Route path="/createAlbum" exact  component={CreateAlbumContainer}/>
                        <Route path="/createPost" exact  component={CreatePostContainer}/>
                        <Route path="/postArea" exact  component={PostAreaContainer}/>
                        <Route path="/peopleInfo" exact  component={PeopleInfoContainer}/>
                        <Route path="/createVideo" exact  component={CreateVideoContainer}/>
                        <Route path="/video/:videoId" exact  component={VideoPlayerContainer}/>
                    </Switch>
                </Container>

                <Segment inverted vertical style={{ padding: '5em 0em', marginTop: '1em', }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='关于' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>留着打广告而已</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>

            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
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
        },

        loginUser: ({userName, password})=>{

            dispatch({
                type: 'LOGIN', payload:{userName: userName, password: password}
            });

        },

        registerUser: ({userName, password})=>{
            dispatch({
                type: 'REGISTER', payload:{userName: userName, password: password}
            });
        },

        logoutUser: (userId)=>{
            dispatch({
                type: 'LOGOUT', payload:{userId: userId}
            });
        },

        tryLogin: ()=>{
            dispatch({
                type: 'TRY_LOGIN'
            })
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer));
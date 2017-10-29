import React from 'react';
import {connect} from 'react-redux';
import { Route} from 'react-router'
import {Container, Segment,Dropdown, Image, Menu, Grid, List, Header} from 'semantic-ui-react'

import LoginRegisterModal from '../components/LoginRegisterModal';
import MainMenu from '../components/MainMenu'

import PhotoAreaContainer from './PhotoAreaContainer'


class MainContainer extends React.Component{


    render(){

        return(
            <div>
                <LoginRegisterModal
                    isOpen={this.props.mainInfo.showLoginModal}
                    onClose={this.props.closeLoginModal}
                />
                <MainMenu
                    hasLogined={this.props.mainInfo.hasLogined}
                    userName={this.props.mainInfo.userName}
                    showLoginModal={this.props.showLoginModal}
                />

                <Container text style={{ marginTop: '5em', minHeight:750}}>
                    <PhotoAreaContainer/>
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
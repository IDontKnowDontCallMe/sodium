import React from 'react';
import {connect} from 'react-redux';
import {Container, Label, List, Menu, Grid, Message, Divider, Header} from 'semantic-ui-react'


class HomePageContainer extends React.Component{





    render(){


        return(
            <Container>
                <Header textAlign='center'>this is a temp home page!</Header>
            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        postAreaInfo : state.postAreaInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
import React from 'react';
import {connect} from 'react-redux';
import {Container, Label, List, Menu, Grid, Message, Divider, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class HomePageContainer extends React.Component{





    render(){


        return(
            <Container>
                <Header textAlign='center'>this is a temp home page!</Header>
                <Link to='/post/1'>post</Link>
                <p/>
                <Link to='/createPost'>create post</Link>
                <div>233</div>
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
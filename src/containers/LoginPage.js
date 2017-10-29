import React from 'react';
import {connect} from 'react-redux';

import LoginForm from '../components/LoginRegisterModal';
import {Container} from 'semantic-ui-react'

class LoginPage extends React.Component{


    render(){

        return(
            <Container>
                just a child page test
            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickLogin: (param) => {
            dispatch({
                type: 'LOGIN',
                payload: param
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);






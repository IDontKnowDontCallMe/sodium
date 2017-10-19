import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component{


    render(){

        return(
            <LoginForm
                user={this.props.user}
                onClickLogin={this.props.onClickLogin}
            />
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






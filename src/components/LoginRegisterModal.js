import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Container } from 'semantic-ui-react'

class LoginRegisterModal extends React.Component{

    constructor(){
        super();
        this.state = {
            modalHeader: '登录',
            showLogin:true,

            loginUsernameInput: '',
            loginPasswordInput: '',
            registerUsernameInput: '',
            registerPasswordInput: ''

        }
    }

    changeFormType = (e)=>{
        e.preventDefault();
        let login = this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin: !this.state.showLogin,
            modalHeader: login?'注册':'登录',
        });

    }

    login = ()=>{

        let param = {
            userName: this.state.loginUsernameInput,
            password: this.state.loginPasswordInput
        }

        this.props.onClickLogin(param)

    }

    loginForm =  ()=>{
        return (
            <Container>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='用户名'
                            onChange={
                                (e, {value} )=>{
                                    this.setState({
                                        ...this.state,
                                        loginUsernameInput: value
                                    })
                                }
                            }
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={
                                (e, {value} )=>{
                                    this.setState({
                                        ...this.state,
                                        loginPasswordInput: value
                                    })
                                }
                            }
                        />

                        <Button color='teal' fluid size='large' onClick={this.login}>登录</Button>
                    </Segment>
                </Form>
                <Message>
                    没有账号? <a href="javascript:void(0)" onClick={this.changeFormType}>去注册</a>
                </Message>
            </Container>
        );
    }

    register = ()=>{
        let param = {
            userName: this.state.registerUsernameInput,
            password: this.state.registerPasswordInput
        }

        this.props.onClickRegister(param)
    }

    registerForm = ()=>{

        return (
            <Container>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='用户名'
                            onChange={
                                (e, {value} )=>{
                                    this.setState({
                                        ...this.state,
                                        registerUsernameInput: value
                                    })
                                }
                            }
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={
                                (e, {value} )=>{
                                    this.setState({
                                        ...this.state,
                                        registerPasswordInput: value
                                    })
                                }
                            }
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='teal' fluid size='large' onClick={this.register}>注册</Button>
                    </Segment>
                </Form>

                <Message>
                    已有账号? <a href="javascript:void(0)" onClick={this.changeFormType}>去登录</a>
                </Message>
            </Container>
        );

    }

    render(){

        const {isOpen, onClose} = this.props;


        return(
            <Modal
                dimmer='blurring'
                open={isOpen}
                closeIcon
                closeOnDimmerClick={false}
                onClose={onClose}
                size='mini'
            >
                <Modal.Header>
                    {this.state.modalHeader}
                </Modal.Header>
                <Modal.Content>
                    {
                        this.state.showLogin?
                            this.loginForm():
                            this.registerForm()
                    }
                </Modal.Content>
            </Modal>
        );

    }

}

export default LoginRegisterModal;


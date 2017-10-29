import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Container } from 'semantic-ui-react'

class LoginRegisterModal extends React.Component{

    constructor(){
        super();
        this.state = {
            modalHeader: '登录',
            showLogin:true,
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
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='密码'
                        />

                        <Button color='teal' fluid size='large'>登录</Button>
                    </Segment>
                </Form>
                <Message>
                    没有账号? <a href="javascript:void(0)" onClick={this.changeFormType}>去注册</a>
                </Message>
            </Container>
        );
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
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='密码'
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='确认密码'
                        />
                        <Button color='teal' fluid size='large'>注册</Button>
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


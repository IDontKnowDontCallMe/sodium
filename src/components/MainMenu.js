import React from 'react';
import { Button, Container, Menu,Segment } from 'semantic-ui-react';


class MainMenu extends React.Component{

    render(){

        const {hasLogined, userName, showLoginModal} = this.props;

        return (


                <Menu size='large' color='black' inverted  fixed='top' >
                    <Container>
                        <Menu.Item key='1' color='teal' as='a' active>首页</Menu.Item>
                        <Menu.Item key='2' color='teal' as='a'>图片区</Menu.Item>
                        <Menu.Item key='3' color='teal' as='a'>交流区</Menu.Item>
                        <Menu.Item key='4' color='teal' as='a'>活动区</Menu.Item>
                        {
                            hasLogined?
                                <Menu.Item key='5' position='right'>
                                    <a>{userName}</a>
                                    <Button as='a' color='teal' style={{ marginLeft: '0.5em' }}>退出</Button>
                                </Menu.Item>
                                :
                                <Menu.Item key='6' position='right'>
                                    <Button as='a' color='teal' style={{ marginLeft: '0.5em' }} onClick={showLoginModal} >登录</Button>
                                </Menu.Item>
                        }
                    </Container>
                </Menu>


        );

    }

}

export default MainMenu;
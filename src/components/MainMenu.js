import React from 'react';
import { Button, Container, Menu,Segment, Dropdown, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import {history} from '../store'


class MainMenu extends React.Component{

    constructor(){
        super();
        let pathName =  history.location.pathname;
        let name = '首页';
        //console.log(pathName)

        if(pathName==='/photoArea'){
            name='图片区'
        }
        else if(pathName==='/postArea'){
            name='交流区'
        }
        else if(pathName==='/videoArea'){
            name='视频区'
        }

        this.state = {
            activedMenuItem: name,
        }
    }

    clickMenuItem = (e, {name})=>{
        this.setState({
            activedMenuItem: name,
        });

        switch (name){
            case '首页':
                history.push('/');
                break;
            case '图片区':
                history.push('/photoArea');
                break;
            case '交流区':
                history.push('/postArea');
                break;
            case '视频区':

                break;
            default: break;
        }

    }

    clickDropDownItem = (e, {children})=>{
        switch (children){
            case '个人中心':
                history.push('/peopleInfo');
                break;
            case '发相册':
                history.push('/createAlbum');
                break;
            case '发帖子':
                history.push('/createPost');
                break;
            case '发视频':
                history.push('/createVideo');
                break;
            default: break;
        }
    }



    render(){

        const {hasLogined, userName, showLoginModal, avatarUrl} = this.props;

        const trigger = (
            <span>{userName}<span>     </span><Image avatar src={avatarUrl}/></span>
        );

        return (


                <Menu size='large' color='black' inverted  fixed='top' >
                    <Container>
                        <Menu.Item key='1' name='首页' color='teal' active={this.state.activedMenuItem==='首页'} onClick={this.clickMenuItem}/>
                        <Menu.Item key='2' name='图片区' color='teal' active={this.state.activedMenuItem==='图片区'} onClick={this.clickMenuItem}/>
                        <Menu.Item key='3' name='交流区' color='teal' active={this.state.activedMenuItem==='交流区'} onClick={this.clickMenuItem}/>
                        <Menu.Item key='4' name='视频区' color='teal' active={this.state.activedMenuItem==='视频区'} onClick={this.clickMenuItem}/>
                        {
                            hasLogined?
                                <Menu.Menu position='right'>
                                    <Dropdown item  trigger={trigger}>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={this.clickDropDownItem}>个人中心</Dropdown.Item>
                                            <Dropdown.Item onClick={this.clickDropDownItem}>发相册</Dropdown.Item>
                                            <Dropdown.Item onClick={this.clickDropDownItem}>发帖子</Dropdown.Item>
                                            <Dropdown.Item onClick={this.clickDropDownItem}>发视频</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Menu.Item>
                                        <Button as='a' color='grey' onClick={this.props.onClickLogout} style={{ marginLeft: '0.5em' }}>退出</Button>
                                    </Menu.Item>
                                </Menu.Menu>


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

/*<Menu.Item key='5' position='right'>*/
/*<a>{userName}</a>*/
/*<Button as='a' color='teal' style={{ marginLeft: '0.5em' }}>退出</Button>*/
/*</Menu.Item>*/

export default MainMenu;
import React from 'react';
import {connect} from 'react-redux';
import {Container, Segment,Dropdown, Image, Menu, Grid, List, Header, Input} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import SimpleAlbumItem from '../components/SimpleAlbumItem';

class PhotoAreaContainer extends React.Component{


    getMenuItems = (themeList, activedTheme)=>{

        return themeList.map((value, index, array)=>{
            return (
                <Menu.Item name={value} key={value} as='a' active={activedTheme===value}/>
            );
        })

    }

    getPageMenu = (pageNum, activedPage)=>{

        let result = [];

        for(let i=1; i<=pageNum; i++){
            result.push(
                <Menu.Item name={String(i)} key={i} as='a' active={activedPage===i}/>
            );
        }

        return result;

    }

    getSimpleAlbumItems = (itemList)=>{

        return itemList.map((value, index, array)=>{
            return (
                <Grid.Column key={index}>
                    <SimpleAlbumItem
                        albumUrl={value.url}
                        coverUrl={value.coverUrl}
                        albumName={value.name}
                        starNum={value.starNum}
                    />
                </Grid.Column>
            );
        })

    }


    render(){

        const {photoAreaInfo} = this.props;

        const menuItem1 = ['人像','风景','生态','纪实','生活','LOMO'];
        const menuItem2 = ['观念','手机Snap','达物','宠物','美食','性感','其他'];

        return(
            <Container>
                <Menu secondary>
                    {this.getMenuItems(menuItem1, photoAreaInfo.activedTheme)}
                    <Menu.Menu position='right'>
                        <Menu.Item key='menuInput'>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu secondary>
                    {this.getMenuItems(menuItem2, photoAreaInfo.activedTheme)}
                    {/*<Menu.Menu position='right'>*/}
                        {/*<Menu.Item>*/}
                            {/*<Dropdown multiple text='热门标签' icon='add user'  labeled button className='icon'/>*/}
                        {/*</Menu.Item>*/}
                    {/*</Menu.Menu>*/}

                </Menu>

                <Grid doubling relaxed columns={4} style={{minHeight: 550}}>
                    {this.getSimpleAlbumItems(photoAreaInfo.photoItemList)}
                </Grid>

                <Grid centered >
                    <Menu pagination>
                        {this.getPageMenu(photoAreaInfo.pageNum, photoAreaInfo.activedPage)}
                    </Menu>
                </Grid>

            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        photoAreaInfo : state.photoAreaInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAreaContainer);
import React from 'react';
import {connect} from 'react-redux';
import {Container, Segment,Dropdown, Image, Menu, Grid, List, Header, Input} from 'semantic-ui-react'

import SimpleAlbumItem from '../components/SimpleAlbumItem';

class PhotoAreaContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            activedMenuItem: '全部',
            activedPageItem: '1',
            searchInput: '',
        }
    }

    componentWillMount(){

        this.props.getPhotosOfTheme('全部')
    }

    clickMenuItem = (e, {name})=>{

        //console.log(name);

        this.setState({
            ...this.state,
            activedMenuItem: name,
        });

        this.props.getPhotosOfTheme(name);

    }


    getMenuItems = (themeList, activedTheme)=>{

        return themeList.map((value, index, array)=>{
            return (
                <Menu.Item name={value} key={value}  active={value===this.state.activedMenuItem} onClick={this.clickMenuItem}/>
            );
        })

    }

    clickPageItem = (e, {name})=>{
        //console.log(name+'page');

        this.setState({
            ...this.state,
            activedPageItem: name,
        });

        this.props.changePage(Number(name));
    }

    getPageMenu = (pageNum, activedPage)=>{

        let result = [];

        for(let i=1; i<=pageNum; i++){
            result.push(
                <Menu.Item name={String(i)} key={i} as='a' active={i===this.props.photoAreaInfo.activedPage} onClick={this.clickPageItem}/>
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
                        albumId={value.albumId}
                    />
                </Grid.Column>
            );
        })

    }

    searchInputChange = (e, {value})=>{
        this.setState({
            ...this.state,
            searchInput: value,
        });

    }

    search = (event)=>{

        if(event.keyCode===13){
            console.log('search');
            this.props.searchPhotos(this.state.searchInput);
        }

    }

    render(){

        const {photoAreaInfo} = this.props;

        const menuItem1 = ['全部','人像','风景','生态','纪实','生活','LOMO'];
        const menuItem2 = ['观念','手机Snap','达物','宠物','美食','性感','其他'];

        return(
            <Container>
                <Menu secondary>
                    {this.getMenuItems(menuItem1, photoAreaInfo.activedTheme)}
                    <Menu.Menu position='right'>
                        <Menu.Item key='menuInput'>
                            <Input icon='search' placeholder='Search...' onChange={this.searchInputChange} onKeyUp={this.search}/>
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
        searchPhotos:(keyword)=>{
            dispatch({
                type: 'SEARCH_PHOTO',
                payload: {keyword: keyword}
            });
        },
        getPhotosOfTheme: (theme)=>{
            dispatch({
                type: 'GET_PHOTOS_OF_THEME',
                payload: {theme: theme}
            });
        },
        changePage: (targetPage)=>{
            dispatch({
                type: 'CHANGE_PHOTO_PAGE',
                payload: {targetPage: targetPage},
            });
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAreaContainer);
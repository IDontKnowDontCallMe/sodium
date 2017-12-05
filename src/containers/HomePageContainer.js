import React from 'react';
import {connect} from 'react-redux';
import {Container, Label, List, Menu, Grid, Message, Divider, Header, Tab, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class HomePageContainer extends React.Component{


    componentWillMount(){

        this.props.loadHomePage();

    }


    getPanes = () => {

        return this.props.mainInfo.hotAlbums.map((value, index, array)=>{
            return {
                menuItem: String(index+1),
                render: () => <Tab.Pane inverted>
                                    <Link to={`/album/${value.albumId}`}>
                                        <Image  centered style={{height: '20em'}} src={value.coverUrl}/>
                                    </Link>
                                </Tab.Pane>
            };
        })

    }


    render(){




        return(
            <Container>
                <Divider horizontal>热门相册</Divider>
                <Tab menu={{ text: true, attached: 'bottom' }} panes={this.getPanes()} />
                <Divider horizontal>热门帖子</Divider>
                <List divided relaxed>
                    {
                        this.props.mainInfo.hotPosts.map((value, index, array)=>{
                            return (
                                <List.Item key={index}>
                                    <List.Content>
                                        <List.Header ><Link to={'/post/'+value.postId}>{value.postName}</Link></List.Header>
                                        <List.Description style={{float: 'right'}}>{value.answerNum + '回复'}</List.Description>
                                    </List.Content>
                                </List.Item>
                            );
                        })
                    }
                </List>
                <Divider horizontal>热门视频</Divider>
                <List divided relaxed>
                    {
                        this.props.mainInfo.hotVideos.map((value, index, array)=>{
                            return (
                                <List.Item key={index}>
                                    <List.Icon name='video camera' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header ><Link to={`/video/${value.id}`}>{value.name}</Link></List.Header>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    }
                </List>

            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadHomePage: ()=>{
            dispatch({
                type: 'LOAD_HOME_PAGE'
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
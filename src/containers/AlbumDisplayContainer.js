import React from 'react';
import {connect} from 'react-redux';
import {Container,  Image, Grid, Header, Message,Divider, Comment ,Form, Button ,Icon, Loader} from 'semantic-ui-react';
import LoaderDimmer from '../components/LoadingDimmer';

import 'react-photoswipe/lib/photoswipe.css'
import {PhotoSwipe} from 'react-photoswipe';

import {Link} from 'react-router-dom'

class AlbumDisplayContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            photoSwipeOpen: false,
            photoSwipeOption: {
                index: 0,
                shareButtons: [
                    {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
                ],
            },
            commentInput:'',
        }
    }

    componentDidMount(){

        this.props.loadAlbumInfo(this.props.match.params.albumId)
    }

    getPhotoItems = (photoList)=>{

        if(photoList.length === 0){
            return (
                <Message >
                    这是个空相册!
                </Message>

            );
        }
        else {
            return photoList.map((value, index, array)=>{
                return (
                    <Grid.Column key={index}>
                        <Image
                            centered
                            src={value.url}
                            onClick={this.imgOnClick(index)}
                        />
                    </Grid.Column>
                );
            })
        }

    }

    imgOnClick = (index)=>{

        return ()=>{

            this.setState({
                ...this.state,
                photoSwipeOption: {
                    index: index,
                    shareButtons: [
                        {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
                    ],
                },
                photoSwipeOpen:true,
            });

        }

    }

    handlePhotoSwipeClose = ()=>{
        this.setState({
            ...this.state,
            photoSwipeOpen: false,
        })
    }

    getPhotoSwipeItems = ()=>{

        return this.props.albumDisplayInfo.photoList.map((value, index, array)=>{
            return (
                {
                    src: value.url,
                    w: value.width,
                    h: value.height,
                }
            );
        });

    }

    getComments = (commentList)=>{

        if(commentList.length === 0){
            return (
                <Header>暂无评论!</Header>
            );
        }
        else {
            return commentList.map((value, index, array)=>{
                return (
                    <Comment key={index}>
                        <Comment.Content>
                            <Comment.Author as='a'>{value.authorName}</Comment.Author>
                            <Comment.Metadata>
                                <div>{value.createdAt}</div>
                            </Comment.Metadata>
                            <Comment.Text>{value.content}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                );
            })
        }

    }


    onCommentInputChange = (e, {value})=>{

        //console.log(value)
        this.setState({
            ...this.state,
            commentInput:value,
        });

    }

    onAddComment = ()=>{

        this.props.addAlbumComment(this.props.mainInfo.userId, this.props.albumDisplayInfo.albumId, this.state.commentInput);

    }

    onClickAddStar = ()=>{
        this.props.addStar(this.props.mainInfo.userId, this.props.albumDisplayInfo.albumId)
    }

    onClickCancelStar = ()=>{
        this.props.cancelStar(this.props.mainInfo.userId, this.props.albumDisplayInfo.albumId)
    }

    render(){


        return(
            <LoaderDimmer active={this.props.albumDisplayInfo.albumInfoLoading}>
                <Container>
                    <Header textAlign='center'>
                        {this.props.albumDisplayInfo.albumName}

                        <Header.Subheader >
                            <p/>
                            <span>作者: </span><Link to={'/user/'+this.props.albumDisplayInfo.authorId}>{this.props.albumDisplayInfo.authorName}</Link>
                            <p/>
                        </Header.Subheader>
                    </Header>
                    <i align='center'>{this.props.albumDisplayInfo.albumDescription}</i>

                    <Divider/>

                    <Grid centered columns={1}>
                        {this.getPhotoItems(this.props.albumDisplayInfo.photoList)}
                        <Grid.Column key='starIcon' textAlign='center'>
                            <Icon name='star' color="yellow" size='large' /><span>{this.props.albumDisplayInfo.starNum}</span>
                            <p/>
                            {
                                this.props.albumDisplayInfo.hasStaredIt?
                                    <Button onClick={this.onClickCancelStar}>取消赞</Button>
                                    :
                                    <Button color='teal' onClick={this.onClickAddStar}>添加赞</Button>
                            }

                        </Grid.Column>
                    </Grid>





                    <Comment.Group>
                        <Header as='h3' dividing>评论</Header>

                        {this.getComments(this.props.albumDisplayInfo.commentList)}

                        <Form reply>
                            <Form.TextArea onChange={this.onCommentInputChange}/>
                            <Button content='评论' labelPosition='left' icon='edit' color='teal' onClick={this.onAddComment}/>
                        </Form>
                    </Comment.Group>


                    <PhotoSwipe
                        isOpen={this.state.photoSwipeOpen}
                        items={this.getPhotoSwipeItems()}
                        options={this.state.photoSwipeOption}
                        onClose={this.handlePhotoSwipeClose}
                    />


                </Container>
            </LoaderDimmer>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        albumDisplayInfo : state.albumDisplayInfo,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadAlbumInfo:(albumId)=>{

            dispatch({
                type: 'LOAD_ALBUM_INFO',
                payload: {albumId: albumId}
            });

        },
        addStar: (userId, albumId)=>{
            dispatch({
                type: 'ADD_ALBUM_STAR',
                payload: {userId: userId, albumId:albumId}
            });

        },
        cancelStar:(userId, albumId)=>{
            dispatch({
                type: 'CANCEL_ALBUM_STAR',
                payload: {userId: userId, albumId:albumId}
            });
        },
        addAlbumComment: (userId, albumId, content)=>{
            dispatch({
                type: 'ADD_ALBUM_COMMENT',
                payload: {userId: userId, albumId:albumId, content:content}
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDisplayContainer);
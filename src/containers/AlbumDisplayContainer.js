import React from 'react';
import {connect} from 'react-redux';
import {Container,  Image, Grid, Header, Message,Divider, Comment ,Form, Button ,Icon} from 'semantic-ui-react';

import 'react-photoswipe/lib/photoswipe.css'
import {PhotoSwipe} from 'react-photoswipe';

import {Link, withRouter} from 'react-router-dom'

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

        }
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




    render(){


        return(
            <Container>
                <Header textAlign='center'>
                    {this.props.albumDisplayInfo.albumName}
                </Header>
                <i align='center'>{this.props.albumDisplayInfo.albumDescription}</i>

                <Divider/>

                <Grid centered columns={1}>
                    {this.getPhotoItems(this.props.albumDisplayInfo.photoList)}
                    <Grid.Column key='starIcon' textAlign='center'>
                        <Icon name='star' color="yellow" size='large' /><span>{this.props.albumDisplayInfo.starNum}</span>
                    </Grid.Column>
                </Grid>





                <Comment.Group>
                    <Header as='h3' dividing>评论</Header>

                    {this.getComments(this.props.albumDisplayInfo.commentList)}

                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>


                <PhotoSwipe
                    isOpen={this.state.photoSwipeOpen}
                    items={this.getPhotoSwipeItems()}
                    options={this.state.photoSwipeOption}
                    onClose={this.handlePhotoSwipeClose}
                />


            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDisplayContainer);
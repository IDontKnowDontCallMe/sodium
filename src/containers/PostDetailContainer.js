import React from 'react';
import {} from 'react';
import {connect} from 'react-redux';
import {Container, Header, Divider, Comment, Form, Button} from 'semantic-ui-react'

import style from './wangEditorStyle.css'

class PostDetailContainer extends React.Component{





    render(){

        const {postDetailInfo} = this.props;

        return(
            <Container style={style}>
                <Header as='h2' textAlign='center'>
                    {postDetailInfo.postName}

                    <Header.Subheader >
                        <p/>
                        <span>作者: </span><a>{postDetailInfo.authorName}</a>
                        <p/>
                        <span>{postDetailInfo.createdAt}</span>
                    </Header.Subheader>
                </Header>
                <Divider section clearing/>
                <div dangerouslySetInnerHTML={{__html:postDetailInfo.content}}></div>

                <Comment.Group style={{marginTop:100}}>
                    <Header as='h3' dividing>回帖</Header>

                    {
                        postDetailInfo.postCommentList.map((value, index, arrray)=>{

                            return (
                                <Comment key={index}>
                                    <Comment.Content>
                                        <Comment.Author as='a'>{value.authorName}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{value.createdAt}</div>
                                        </Comment.Metadata>
                                        {
                                            value.toId===-1?
                                                <span></span>
                                                :
                                                <Comment.Text><a>@{value.toName}</a></Comment.Text>
                                        }
                                        <Comment.Text>{value.content}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            );

                        })
                    }

                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>


            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        postDetailInfo : state.postDetailInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
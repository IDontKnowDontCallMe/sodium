import React from 'react';
import {} from 'react';
import {connect} from 'react-redux';
import {Container, Header, Divider, Comment, Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

import style from './wangEditorStyle.css'

class PostDetailContainer extends React.Component{

    constructor(){
        super();
        this.state = {

            commentInput: ''

        }
    }

    componentDidMount(){

        this.props.loadPostInfo(this.props.match.params.postId)
        //this.props.loadPostInfo('8')
    }

    onCommentChange = (e, {value})=>{

        //console.log(value)
        this.setState({
            ...this.state,
            commentInput:value,
        });

    }

    onAddComment = ()=>{

        let toId = -1;

        if(this.props.mainInfo.hasLogined){
            this.props.addPostComment(this.props.mainInfo.userId, toId, this.props.postDetailInfo.postId, this.state.commentInput);

            // this.setState({
            //     ...this.state,
            //     commentInput:'',
            // });
        }
        else {
            this.props.showLoginModal();
        }



    }




    render(){

        const {postDetailInfo} = this.props;

        return(
            <Container style={style}>
                <Header as='h2' textAlign='center'>
                    {postDetailInfo.postName}

                    <Header.Subheader >
                        <p/>
                        <span>作者: </span><Link to={'/user/'+this.props.postDetailInfo.authorId}>{this.props.postDetailInfo.authorName}</Link>
                        <p/>
                        <span>{postDetailInfo.createdAt}</span>
                    </Header.Subheader>
                </Header>
                <Divider section clearing/>
                <div dangerouslySetInnerHTML={{__html:postDetailInfo.content}}></div>

                <Comment.Group style={{marginTop:100}}>
                    <Header as='h3' dividing>回帖</Header>

                    {
                        postDetailInfo.postCommentList.length === 0?
                            <Header>暂无评论!</Header>
                            :

                            postDetailInfo.postCommentList.map((value, index, arrray)=>{

                                return (
                                    <Comment key={index}>
                                        <Comment.Avatar src={value.authorAvatar} />
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
                        <Form.TextArea onChange={this.onCommentChange}/>
                        <Button disabled={!this.props.mainInfo.hasLogined} content='回复' labelPosition='left' icon='edit' color='teal' onClick={this.onAddComment}/>
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

        loadPostInfo: (postId)=>{
            dispatch({
                type: 'LOAD_POST_INFO',
                payload: {postId: postId}
            });
        },

        addPostComment: (userId, toId, postId, content)=>{
            dispatch({
                type: 'ADD_POST_COMMENT',
                payload: {userId: userId, toId: toId, postId:postId, content:content},
            });
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
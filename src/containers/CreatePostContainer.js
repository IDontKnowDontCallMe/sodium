import React from 'react';
import {connect} from 'react-redux';
import {Container, Form, Button, Grid} from 'semantic-ui-react'

import WangEditor from '../components/WangEditor'


class CreatePostContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            headInput: '',
        }
    }

    handleCreate = ()=>{

        let param = {
            userId: this.props.mainInfo.userId,
            headName: this.state.headInput,
            content: this.refs.wangEditor.getContent()
        };


        this.props.createPost(param);

    }

    headInputChange = (e, {value})=>{
        this.setState({
            headInput: value,
        })
    }


    render(){



        return(
            <Container>
                <Grid columns={1}>
                    <Grid.Column key='0'>
                        <Form.Field required>
                            <Form.Input onChange={this.headInputChange} label='标题' fluid />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <WangEditor ref='wangEditor'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='teal' onClick={this.handleCreate}>创建</Button>
                    </Grid.Column>
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

        createPost:({userId, headName, content}) =>{

            dispatch({
                type:'CREATE_POST',
                payload:{userId: userId, headName: headName, content: content},
            });

        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer);
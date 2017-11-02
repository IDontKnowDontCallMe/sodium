import React from 'react';
import {connect} from 'react-redux';
import {Container, Form, Button, Grid} from 'semantic-ui-react'

import WangEditor from '../components/WangEditor'


class CreatePostContainer extends React.Component{





    render(){



        return(
            <Container>
                <Grid columns={1}>
                    <Grid.Column key='0'>
                        <Form.Field required>
                            <Form.Input label='标题' fluid />
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <WangEditor/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='teal' >创建</Button>
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
        closeLoginModal: () => {
            dispatch({
                type: 'CLOSE_LOGIN_MODAL',
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer);
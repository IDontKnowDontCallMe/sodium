import React from 'react';
import {connect} from 'react-redux';
import {Container,Form, Label, Icon, Button, Input, Header} from 'semantic-ui-react';
import LoaderDimmer from '../components/LoadingDimmer'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'






class CreateVideoContainer extends React.Component{

    constructor(){
        super();

        this.state = {
            head: '',
            tempFile: null,
        };
    }

    uploader = new FineUploaderTraditional({
        options: {
            // chunking: {
            //     enabled: true
            // },
            core: {
                multiple: false,
            },

            deleteFile: {
                enabled: true,
                endpoint: 'http://localhost:3000/deleteTempVideo'
            },
            request: {
                endpoint: 'http://localhost:3000/uploadTempVideo'
            },
            retry: {
                enableAuto: false,
                showButton: true
            },
            validation: {
                allowedExtensions: ['mp4','flv','mkv']
            },
            cors: {
                expected: true,
                //allowXdr: true,
                sendCredentials: true
            },

            callbacks: {
                onComplete: (id, name, responseJSON, xhr) => {

                    let tempFile = {
                        id: id,
                        name: name,
                        qquuid: responseJSON.qquuid,
                        tempFilePath: responseJSON.tempFilePath
                    }

                    this.setState({
                        ...this.state,
                        tempFile: tempFile,
                    })

                },



                onDeleteComplete: (id) =>{
                    this.setState({
                        ...this.state,
                        tempFile: null,
                    })
                }

            }
        },


    })

    onHeadInputChange = (e, {value})=>{
        //console.log(value)
        this.setState({
            ...this.state,
            head: value,
        });
    }

    clickCreate = ()=>{
        this.props.createVideo(this.state.head, this.state.tempFile.tempFilePath, this.state.tempFile.qquuid);
    }

    render(){



        return(
            <LoaderDimmer active={this.props.videoInfo.createLoading}>
                <Container>


                    <Form>
                        <Form.Field required>
                            <Form.Input label='标题' onChange={this.onHeadInputChange}/>
                        </Form.Field>


                        <Form.Field>
                            <Gallery
                                fileInput-children={(<span><Icon name='upload' />选择视频文件</span>)}
                                dropzone-multiple={ false }
                                uploader={ this.uploader }
                            />
                        </Form.Field>

                        <Button color='teal' onClick={this.clickCreate}>创建视频</Button>
                    </Form>


                </Container>
            </LoaderDimmer>

        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        videoInfo: state.videoInfo,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createVideo: (name, tempFilePath, qquuid)=>{
            dispatch({
                type: 'CREATE_VIDEO',
                payload: {
                    name: name,
                    tempFilePath: tempFilePath,
                    qquuid: qquuid,
                }
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVideoContainer);
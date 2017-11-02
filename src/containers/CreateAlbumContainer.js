import React from 'react';
import {connect} from 'react-redux';
import {Container,Form, Label, Icon, Button, Input, Header} from 'semantic-ui-react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true
        },
        deleteFile: {
            enabled: true,
            endpoint: '/uploads'
        },
        request: {
            endpoint: '/uploads'
        },
        retry: {
            enableAuto: true
        }
    }
})

const themeOptions = [
    {
        key: '0',
        text: '人像',
        value: '人像',
    },
    {
        key: '1',
        text: '风景',
        value: '风景',
    },
    {
        key: '2',
        text: '生态',
        value: '生态',
    },
    {
        key: '3',
        text: '纪实',
        value: '纪实',
    },
    {
        key: '4',
        text: '生活',
        value: '生活',
    },
    {
        key: '5',
        text: 'LOMO',
        value: 'LOMO',
    },
    {
        key: '6',
        text: '观念',
        value: '观念',
    },
    {
        key: '7',
        text: '手机Snap',
        value: '手机Snap',
    },
    {
        key: '8',
        text: '达物',
        value: '达物',
    },
    {
        key: '9',
        text: '宠物',
        value: '宠物',
    },
    {
        key: '10',
        text: '美食',
        value: '美食',
    },
    {
        key: '11',
        text: '性感',
        value: '性感',
    },
    {
        key: '12',
        text: '其他',
        value: '其他',
    },
];



class CreateAlbumContainer extends React.Component{

    constructor(){
        super();
        this.state = {

            tags:[],
            tempTag: '',
            showTagInput: false,
        }

    }

    clickAddTag = ()=>{

        //let showTagInput = !this.state.showTagInput;

        this.setState({
            ...this.state,
            showTagInput: true,
        });

    }

    writeTheTempTag = (e, data)=>{
        this.setState({
            ...this.state,
            tempTag: data.value,
        });
    }

    addATag = ()=>{

        if(this.state.tempTag === ''){
            this.setState({
                ...this.state,
                tempTag: '',
                showTagInput: false,
            });
            return;
        }

        const tags = this.state.tags;
        tags.push(this.state.tempTag);

        this.setState({
            ...this.state,
            tempTag: '',
            showTagInput: false,
            tags: tags,
        });

    }

    deleteTag = (value)=>{

        return ()=>{
            const tags = this.state.tags;
            let index = tags.indexOf(value);
            tags.splice(index, 1);

            this.setState({
                ...this.state,
                tags: tags,
            });
        }

    }

    cancelAddTag = ()=>{
        this.setState({
            ...this.state,
            tempTag: '',
            showTagInput: false,
        });
        return;
    }

    getTagItems = (tagList)=>{

        const colors = ['yellow', 'teal','green', 'blue', 'orange'];

        return tagList.map((value, index)=>{

            let i = index % 6;
            let color = colors[i];
            return (
                <Label key={value+':'+index} color={color} tag>{value}<Icon color='red' name='delete' onClick={this.deleteTag(value)}/></Label>
            );

        })
    }

    render(){



        return(

            <Container>

                <Form>
                    <Form.Field required>
                        <Form.Input label='标题' />
                    </Form.Field>
                    <Container>
                        <Header as='h5'>标签: </Header>
                        {
                            this.getTagItems(this.state.tags)
                        }
                        {
                            this.state.showTagInput?
                                <Input
                                    type='text'
                                    onChange={this.writeTheTempTag}
                                    action
                                    style={{ maxWidth:100, maxHeight:30}}
                                >
                                    <input/>
                                    <Button compact icon style={{ maxWidth:30, maxHeight:30}}>
                                        <Icon color='red' name='delete' onClick={this.cancelAddTag}/>
                                    </Button>
                                    <Button compact icon style={{ maxWidth:30, maxHeight:30}}>
                                        <Icon color='teal' name='add' onClick={this.addATag}/>
                                    </Button>
                                </Input>
                                :
                                <Button floated='right' color='teal' icon='add' onClick={this.clickAddTag} />
                        }
                    </Container>
                    <Form.Field required>
                        <Form.Select label='主题'  placeholder='请选择主题' options={themeOptions}/>
                    </Form.Field>
                    <Form.Field required>
                        <Form.TextArea label='简介' placeholder='说些东西描述一下吧...'/>
                    </Form.Field>

                    <Form.Field>
                        <Gallery uploader={ uploader } />
                    </Form.Field>

                    <Button color='teal' >创建</Button>
                </Form>





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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbumContainer);
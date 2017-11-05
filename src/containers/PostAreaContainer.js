import React from 'react';
import {connect} from 'react-redux';
import {Container, Label, List, Menu, Grid, Message, Divider} from 'semantic-ui-react'


class PostAreaContainer extends React.Component{


    getPageMenu = (pageNum, activedPage)=>{

        let result = [];

        for(let i=1; i<=pageNum; i++){
            result.push(
                <Menu.Item name={String(i)} key={i} as='a' active={activedPage===i} onClick={this.clickMenuItem}/>
            );
        }

        return result;

    }

    clickMenuItem = (e, {name})=>{

        console.log(name+'page')

    }

    clickLabel = (e, data)=>{

        console.log(data)

    }


    render(){

        const {postAreaInfo} = this.props;

        return(
            <Container>
                <Grid columns={1}>
                    <Grid.Column>
                        <Label.Group style={{float: 'right'}}>
                            <Label key='0' as='a' pointing={postAreaInfo.choosedLabel==='postTime'?'below':false} onClick={this.clickLabel}>发帖时间</Label>
                            <Label key='1' as='a' pointing={postAreaInfo.choosedLabel==='answerTime'?'below':false} onClick={this.clickLabel}>回复时间</Label>
                            <Label key='2' as='a' pointing={postAreaInfo.choosedLabel==='answerNum'?'below':false} onClick={this.clickLabel}>回复数量</Label>
                        </Label.Group>
                        <Divider section clearing/>
                    </Grid.Column>
                    <Grid.Column>
                        <List divided relaxed>

                            {
                                (postAreaInfo.postList===undefined||postAreaInfo.postList.length===0)?
                                    <Message>
                                        <Message.Header>
                                            暂无帖子
                                        </Message.Header>
                                    </Message>
                                    :
                                    postAreaInfo.postList.map((value, index, array)=>{
                                        return (
                                            <List.Item key={index}>
                                                <List.Content>
                                                    <List.Header as='a'>{value.postName}</List.Header>
                                                    <List.Description style={{float: 'right'}}>{value.answerNum + '回复'+'   ' + '发表于'+value.createdAt + ' '}</List.Description>
                                                </List.Content>
                                            </List.Item>
                                        );
                                    })

                            }
                        </List>
                        <Divider section clearing/>
                    </Grid.Column>
                    <Grid.Column >
                            <Menu pagination>
                                {
                                    this.getPageMenu(postAreaInfo.pageNum, postAreaInfo.pageIndex)
                                }
                            </Menu>
                    </Grid.Column>
                </Grid>

            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
        postAreaInfo : state.postAreaInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostAreaContainer);
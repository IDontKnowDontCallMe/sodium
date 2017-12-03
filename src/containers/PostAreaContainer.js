import React from 'react';
import {connect} from 'react-redux';
import {Container, Label, List, Menu, Grid, Message, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class PostAreaContainer extends React.Component{

    componentDidMount(){

        //this.props.loadAlbumInfo(this.props.match.params.albumId)
        this.props.changePostOrder('发帖时间')
    }


    getPageMenu = (pageNum, activedPage)=>{

        let result = [];

        for(let i=1; i<=pageNum; i++){
            result.push(
                <Menu.Item name={String(i)} key={i} as='a' active={this.props.postAreaInfo.pageIndex===i} onClick={this.clickMenuItem}/>
            );
        }

        return result;

    }

    clickMenuItem = (e, {name})=>{

        //console.log(name+'page')

        this.props.changePage(Number(name))

    }

    clickLabel = (e, {name})=>{

        //console.log(name)

        this.props.changePostOrder(name)

    }


    render(){

        const {postAreaInfo} = this.props;

        return(
            <Container>
                <Grid columns={1}>
                    <Grid.Column>
                        <Label.Group style={{float: 'right'}}>
                            <Label key='postTime' name='发帖时间' as='a' pointing={postAreaInfo.choosedLabel==='发帖时间'?'below':false} onClick={this.clickLabel}>发帖时间</Label>
                            <Label key='answerTime' name='回复时间'  as='a' pointing={postAreaInfo.choosedLabel==='回复时间'?'below':false} onClick={this.clickLabel}>回复时间</Label>
                            <Label key='answerNum' name='回复数量'  as='a' pointing={postAreaInfo.choosedLabel==='回复数量'?'below':false} onClick={this.clickLabel}>回复数量</Label>
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
                                                    <List.Header ><Link to={'/post/'+value.postId}>{value.postName}</Link></List.Header>
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

        changePostOrder: (order) => {
            dispatch({
                type: 'SEARCH_POST',
                payload: {order: order},
            });
        },
        changePage: (targetPage)=>{
            dispatch({
                type: 'CHANGE_POST_PAGE',
                payload: {targetPage: targetPage}
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAreaContainer);
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {history} from '../store'

class SimpleAlbumItem extends React.Component{

    clickLink = ()=>{

        const {albumId} = this.props;

        history.push('/album/'+albumId)
    }


    render(){

        const {albumUrl, coverUrl, albumName, starNum} = this.props;

        return (
            <Card link onClick={this.clickLink}>
                <Card.Content>
                    <Image src={coverUrl} />
                </Card.Content>
                <Card.Content >
                    <Card.Header>
                        {albumName}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='star' color="yellow" />
                    <span>{starNum}</span>
                </Card.Content>
            </Card>
        );

    }

}

export default SimpleAlbumItem;
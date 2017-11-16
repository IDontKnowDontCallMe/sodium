import React from 'react';
import { Loader, Dimmer,Segment } from 'semantic-ui-react';


class LoadingDimmer extends React.Component{


    render(){

        return (
            <Dimmer.Dimmable  dimmed={this.props.active}>
                <Dimmer active={this.props.active} inverted>
                    <Loader>Loading</Loader>
                </Dimmer>
                {
                    this.props.children
                }
            </Dimmer.Dimmable>
        );

    }

}

export default LoadingDimmer;
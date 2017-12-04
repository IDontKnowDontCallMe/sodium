import React from 'react';
import {connect} from 'react-redux';
import {Container, Form, Button, Grid} from 'semantic-ui-react';
import Hls from 'hls.js';


class VideoPlayerContainer extends React.Component{

    constructor(){
        super();
    }


    componentDidMount() {

        if(Hls.isSupported()) {
            var video = document.getElementById('video');
            var hls = new Hls();
            hls.loadSource('http://localhost:3000/videos/45bdd35e-cd47-43a5-81c9-cb26a7bc40d4/45bdd35e-cd47-43a5-81c9-cb26a7bc40d4.m3u8');
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                //video.play();
            });
        }
    }

    render(){



        return(
            <Container>


                    <video
                        id='video'
                        controls
                        width={600}
                        height={450}
                    />

            </Container>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainInfo,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);
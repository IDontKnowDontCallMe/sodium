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
            let video = document.getElementById('video');
            let hls = new Hls();

            let videoId = Number(this.props.match.params.videoId);
            let videoSrc = null;
            for(let v of this.props.mainInfo.hotVideos){
                if(videoId === v.id){
                    videoSrc = v.origin;
                    break;
                }
            }

            hls.loadSource(videoSrc);
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
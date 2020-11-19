import React from 'react';
import videojs from 'video.js'

// VideoPlayer is an example of ES6 class. It is extending from React.Comonent class which is imported from "react" package.
export default class VideoPlayer extends React.Component {

    // It is called after the first render. As soon as the component has been mounted on the screen.
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    // It is called whenever the render method is called, and anything updates on the screen.
    // basically when setState is called, or new props comes in.
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.player.src({ ...this.props.sources });
    }

    // when you are exiting the screen,this method is called, and in here we're destroying the player from memory
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video ref={ node => this.videoNode = node } className="video-js"></video>
                </div>
            </div>
        )
    }
}

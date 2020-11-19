import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import { storeVideos } from '../../redux/videos/actions'
import VideoPlayer from "../VideoPlayer";
import VideoListSkeleton from "../VideoListSkeleton";

function VideoList({ w3_open, videosReducer, storeVideosRedux }) {
    const [ videos, setVideos ] = useState(null);
    const [ currentVideo, setCurrentVideo ] = useState(null);
    const getVideos = async () => {
        try {
            // The fetch web api to request the API using async/await and get the videos list.
            const response = await fetch('http://s-it-e.com/project/json.php');
            const responseObj = await response.json()
            setVideos(responseObj);
            setCurrentVideo(responseObj.shortFormVideos[0]);
            storeVideosRedux(responseObj)
        } catch (e) {
            console.log('Getting Error in fetching Videos')
        }
    }

    useEffect(() => {
        const {videosList, updatedAt} = videosReducer;
        // if the videos array is empty, or last updated time was 1 hour ago, fetch, else don't fetch
        let lastUpdated = new Date(updatedAt)
        let now = new Date();
        if(!videosList || ((lastUpdated - now) / 60000) > 60){
          getVideos();
        } else {
          setVideos(videosList)
          setCurrentVideo(videosList.shortFormVideos[0]);
        }
    }, []);

    useEffect(() => {
    }, [currentVideo]);

    const selectVideoHandler = (video) => {
        console.log('currentVideo', video);
        const scrollToTop = () => {
            scroll.scrollToTop();
        }
        scrollToTop();
        setCurrentVideo({ ...video})
    }

    // if(!videos) { return <PreLoader /> }
    if(!videos) { return <VideoListSkeleton />}

    return (
        <React.Fragment>
            {currentVideo && (
                <div className="w3-container w3-padding">
                    <VideoPlayer
                        autoplay
                        controls
                        fluid
                        sources={{...{ src: currentVideo.content.videos[0].url, type: 'application/x-mpegURL' }}}
                    />
                    <div className="padding-video">
                        <div className="video-title">{currentVideo.title}</div>
                        <div className="video-description">{currentVideo.shortDescription}</div>
                    </div>
                </div>
            )}
            <div className="all-episodes textCenter">
                ALL EPISODES
            </div>
            <div className="flex-container">
                {/*There should only be 30 items total in the gallery. If there are more than 30 items in the feed for the show, you can truncate the feed. This is done below using array's slice method..*/}
                {videos && videos.shortFormVideos && videos.shortFormVideos.slice(0, 30).map(video => {
                    let activeClass = ''
                    if(currentVideo && video.id === currentVideo.id) {
                        activeClass = 'active';
                    }

                    return (
                        <div key={video.id} className="flex-item" onClick={() => selectVideoHandler(video)}>
                            <div className={`w3-hover-opacity ${activeClass}`}>
                            <img src={video.thumbnail} alt={video.title} style={{width:'100%'}} />
                            <div className="">
                                <p className="gallery-title">{video.title}</p>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
  return {
    videosReducer: state.videos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeVideosRedux: (data) => dispatch(storeVideos(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

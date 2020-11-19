import React from 'react';
import Skeleton from 'react-loading-skeleton';


function VideoListSkeleton() {
    const arr = [1,2,3,4,5,6,7,8]
    return (
        <React.Fragment>
            
            <div className="w3-container w3-padding">

                <Skeleton count={1} height={150} />
                <div className="padding-video">
                    <div className="video-title"><Skeleton count={1}  /></div>
                    <div className="video-description"><Skeleton count={2} /></div>
                </div>
            </div>
            <div className="all-episodes textCenter">
                ALL EPISODES
            </div>
            <div className="row">
                {arr.map( (video, i) => {
                    return (
                        <div key={i} className="column">
                            <Skeleton count={1} height={80} />
                            <div className="">
                                <p className="gallery-title"><Skeleton count={1}/></p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </React.Fragment>
    )
}

export default VideoListSkeleton;

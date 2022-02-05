import React from "react";
import VideoItem from "../components/videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const returnedList = videos.map(video => {
    return (
      <VideoItem key={video.etag} onVideoSelect={onVideoSelect} video={video} />
    );
  });

  return <div className="ui relaxed divided list">{returnedList}</div>;
};

export default VideoList;

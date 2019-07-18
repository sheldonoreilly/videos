import React from "react";

//destructure
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // because we want to pass the video onClick event we use a fat-arrow
    // callback
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

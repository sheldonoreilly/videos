import React from "react";
import VideoItem from "./VideoItem";

//destructure paramater
const VideoList = ({ videoList }) => {
  const vidList = videoList.map((video, index) => {
    return <VideoItem key={index} video={video} />;
  });
  return <div className="ui relaxed divided list">{vidList}</div>;
};

export default VideoList;

import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const vidoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div class="ui raised segment">
      <div className="ui embed">
        <iframe title="Video Player" src={vidoSrc} />
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};
export default VideoDetails;

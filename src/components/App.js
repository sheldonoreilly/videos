import React, { Component } from "react";
import Search from "./Search";
import "./apis/youtube";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    console.log(term);
    //youtube is pre-configured axios = so like calling axios.get()
    const response = await youtube.get("/search", {
      params: {
        //'q' is defined by google
        q: term
      }
    });
    console.log("response", response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  componentDidMount() {
    this.onTermSubmit("tallest buildings");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log("video", video);
    console.log("this.state.selectedVideo", this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <Search onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoList={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

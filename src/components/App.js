import React, { Component } from "react";
import Search from "./Search";
import "./apis/youtube";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";

class App extends Component {
  state = { videos: [] };

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
      videos: response.data.items
    });
  };

  componentDidMount() {
    //call the youtube api
  }

  render() {
    return (
      <div className="ui container">
        <Search onTermSubmit={this.onTermSubmit} />
        NumVideos: {this.state.videos.length}
        <VideoList videoList={this.state.videos}/>
      </div>
    );
  }
}
export default App;

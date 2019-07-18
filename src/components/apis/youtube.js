import axios from "axios";
const KEY = "AIzaSyAGfO6FwaniD_0Gqw0U54b_zWnTv0nUb5E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

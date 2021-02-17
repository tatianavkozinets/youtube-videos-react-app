import axios from "axios";

const KEY = "AIzaSyBl5Cjx2OKPnlFZ3vwCKZ8P69WExU1GSKI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", //gives information about viedos title, decription, link to the video, author
    maxResults: 10,
    key: KEY
  }
});

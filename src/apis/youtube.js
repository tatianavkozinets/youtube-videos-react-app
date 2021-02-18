import axios from "axios";

const KEY = "AIzaSyChLcOfoHhbMZ3Ovlx0NgbwCUzKVldKfZM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", //gives information about viedos title, decription, link to the video, author
    maxResults: 5,
    key: KEY
  }
});

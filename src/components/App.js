import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const initSearch = "building";
  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideoSelected] = useState(null);

  const onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setVideoSelected(response.data.items[0]);
  };

  useEffect(() => {
    onTermSubmit(initSearch);
  }, []);

  const onVideoSelect = video => {
    setVideoSelected(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={videoSelected} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

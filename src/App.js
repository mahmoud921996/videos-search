import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import VideoDetails from "./components/videoDetail";

import UseVideo from "./components/hooks/useVideo";
import VideoList from "./components/videoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = UseVideo("programming");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

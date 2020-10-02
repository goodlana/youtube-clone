import React, { useState, useEffect } from 'react';
import './App.css';
import  Header  from './components/Header';
import youtube from './api/youtube'
import { Grid } from '@material-ui/core'
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async(searchTerm) => { 
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: searchTerm
      }
    })
    const responsedArr = response.data.items;
    const firstVideo = responsedArr[0].id.kind !== 'youtube#channel' ? responsedArr[0] : responsedArr[1]

    setVideos(responsedArr)
    setSelectedVideo(firstVideo)
  }
  
  const onVideoSelect = ( video ) => {
    setSelectedVideo(video)
  }

  useEffect(()=> {
    handleSubmit('essential')
  })

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} />
      <div className="main-component">
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12} >
          <Grid container spacing={10}>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo}/>
              <div className="details"></div>
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
              <VideoList onVideoSelect={onVideoSelect} videos={videos} setSelectedVideo={setSelectedVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;

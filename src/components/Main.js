import React from 'react';
import { Grid } from '@material-ui/core';
import './Main.css'

import VideoDetails from './VideoDetails';

function Main() {
  return (
    <div className="main-component">
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12} >
          <Grid container spacing={10}>
            <Grid item xs={8}>
              <VideoDetails />
              <div className="details"></div>
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main

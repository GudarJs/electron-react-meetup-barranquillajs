import React from 'react'

import { GridList, GridTile } from 'material-ui/GridList';

import VideoThumbnail from '../components/video-thumbnail'

const API_URL = 'https://api.twitch.tv/kraken/streams?client_id=6aa4ti2s82v8udym3fvveoiwa4k7e1'

class VideoList extends React.Component {
  constructor() {
    super();
    this.state = {
      streams: []
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => {
        const streams = data.streams;
        this.setState({ streams });
      })
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList} >
          {
            this.state.streams.map((stream) => (
              <GridTile
                key={stream._id}
                title={stream.game}
                cols={stream.featured ? 2 : 1}
                rows={stream.featured ? 2 : 1}
                style={styles.gridTile}
                >
              <VideoThumbnail key={ stream._id }
                        picture={ stream.preview.large }
                        channel={ stream.channel.name } />
                
              </GridTile>
            ))
          }
        </GridList>
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: '1rem',
    width: '80%',
    height: '100%',
    overflowY: 'auto',
  },
  gridTile: {
    cursor: 'pointer',
  }
};

export default VideoList

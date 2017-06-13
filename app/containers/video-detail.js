import React from 'react'

import AppBar from 'material-ui/AppBar'

class VideoDetail extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <iframe
          src={`http://player.twitch.tv/?channel=${this.props.match.params.channelId}`}
          height="300"
          width="400"
          frameBorder="no"
          scrolling="no"
          allowFullScreen="yes">
        </iframe>
      </div>
    )
  }
}

const styles = {
  root: {
    marginTop: '2rem',
  }
}

export default VideoDetail

import React from 'react'
import { Link } from 'react-router-dom'

class VideoThumbnail extends React.Component {  
  render() {
    return (
      <div>
        <Link style={styles.link} to={`/video/${this.props.channel}`}>
          <img style={styles.picture} src={this.props.picture} />
        </Link>
      </div>
    )
  }
}

const styles = {
  picture: {
    maxWidth: '100%',
  },
  link: {
    display: 'block',
  }
}

export default VideoThumbnail

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

import VideoList from './containers/video-list'
import VideoDetail from './containers/video-detail'

const injectTapEventPlugin = require('react-tap-event-plugin');
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <AppBar title="Twitch Api Client Example - BarranquillaJs MeetUp" showMenuIconButton={false} />
      <Router>
        <div style={styles.root}>
          <Route path="/" component={VideoList}/>
          <Route path="/video/:channelId" component={VideoDetail}/>
        </div>
      </Router>
    </div>  
  </MuiThemeProvider>, document.getElementById('content')
)

    // Route.js
    import React, { Component } from 'react';
    import {Platform} from 'react-native';
    // import components from react-native-router-flux
    import {Router, Stack, Scene} from 'react-native-router-flux';
    // import our screens as components 
    import Home from './screens/Home';
    import WatchVideo from './screens/Video';
    export default class Routes extends Component {
      render() {
        return(
          <Router>
              <Stack key="root">
                <Scene key="home" component={Home} title="Playlist Videos" />
                <Scene key="watchvideo" component={WatchVideo} title="View Video"/>
              </Stack>
          </Router>
          )
      }
    }
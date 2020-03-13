    import React, { Component } from 'react';
    import { StyleSheet, SafeAreaView, View, WebView } from 'react-native';
    import {Actions} from 'react-native-router-flux';
    export default class WatchVideo extends Component {

      home(){
        Actions.home();
      }
      videos(){
        Actions.videos();
      }
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <SafeAreaView style={styles.safeArea}>
              { 
                <WebView
                  source={{ uri: "https://www.youtube.com/embed/"+this.props.video_url}}
                  startInLoadingState={true} 
                />
              }
          </SafeAreaView>
        );
      }
    }
    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: '#fff'
      }
    });
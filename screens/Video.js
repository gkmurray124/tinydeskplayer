import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview'
export default class WatchVideo extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          { 
            <WebView
              source={{ uri: `https://www.youtube.com/watch?v=${this.props.videoId}`}}
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
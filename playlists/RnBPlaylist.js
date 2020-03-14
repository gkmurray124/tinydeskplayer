import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
export default class RnBPlaylist extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          { 
            <WebView
              source={{ uri: 'https://www.youtube.com/watch?v=xnS2tbgcTc0&list=PL4W7Aa3_xVcfplsKGVyAEtKgpWaZ05cyf'}}
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
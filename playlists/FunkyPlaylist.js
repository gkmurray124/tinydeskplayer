import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
export default class FunkyPlaylist extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          { 
            <WebView
              source={{ uri: 'https://www.youtube.com/watch?v=GVDJ8O3lPBA&list=PL4W7Aa3_xVcf_pqPOmmNxvdZKGhjNBfvz'}}
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
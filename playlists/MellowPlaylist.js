import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
export default class MellowPlaylist extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          { 
            <WebView
              source={{ uri: 'https://www.youtube.com/watch?v=SqPtIkxSxI0&list=PL4W7Aa3_xVccPBZ6nucbBpJaqP0H_tsVL'}}
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
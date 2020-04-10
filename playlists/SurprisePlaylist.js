import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default class SurprisePlaylist extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <SafeAreaView style={styles.safeArea}>
                { 
                <WebView 
                source={{ uri: `https://www.youtube.com/watch?v=QrR_gm6RqCo&list=${this.props.playlistUrl}`}}
                startInLoadingState={true} 
                />
            }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });
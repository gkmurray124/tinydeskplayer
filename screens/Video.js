import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview'
export default class WatchVideo extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    const { navigation } = this.props 
    const { videoId } = navigation.state.params  

    return (
      <SafeAreaView style={styles.safeArea}>
          { 
            <WebView
              source={{ uri: `https://www.youtube.com/watch?v=${videoId}`}}
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

// export default function WatchVideo({ route }) { 
//   const { videoId } = route.params
//   return ( 
//     <SafeAreaView style={styles.safeArea}>
//      { 
//       <WebView
//         source={{ uri: `https://www.youtube.com/watch?v=${videoId}`}}
//         startInLoadingState={true} 
//         />
//       }
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// });
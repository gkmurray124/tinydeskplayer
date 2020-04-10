import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import { surpriseUrl } from '../utils'

export default class Surprise extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      videos: [], 
      playlistUrl: ''
    }
  }
  componentWillMount() {
    this.fetchPlaylistData();
  };
  fetchPlaylistData = async () => {
    const url = surpriseUrl();
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ videos: json['items'], playlistUrl: url });
  };

  render() {
    const videos = this.state.videos; 
    const { navigate } = this.props.navigation
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigate('Surprise Playlist')}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 28, paddingTop: 8 }}>Looks good!</Text>
        </TouchableOpacity>
        <FlatList 
          data={videos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={
            ({item}) => 
            <TouchableOpacity
            style={styles.demacate}
            onPress={() => navigate('Video', { videoId: item.contentDetails.videoId })}>
              <Text 
                style={styles.item}
              >
                {item.snippet.title}
              </Text>
            </TouchableOpacity>
          }
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#C4FBFF'
  },
  demacate: {
    borderBottomColor: '#36B9ED',
    borderBottomWidth: 2,
    borderRadius:10
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
  button: { 
    height: 50,
    backgroundColor: '#36B9ED'
}
});
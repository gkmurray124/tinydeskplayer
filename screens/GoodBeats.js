import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

const MAX_RESULT = 15; 
const PLAYLIST_ID = "PL4W7Aa3_xVcdO6JOMXu-qzC5wtLRI3AUh"; 
const API_KEY = "AIzaSyDNx0Jmg9OpnNoktl6489zmB2ptvNTRj28"; 
export default class GoodBeatsPlaylist extends Component {

    home(){
        Actions.home();
      };
      watchVideo(video_url){
        Actions.watchvideo({video_url: video_url});
      };
      componentWillMount() {
        this.fetchPlaylistData();
      };
      fetchPlaylistData = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
        const json = await response.json();
        this.setState({ videos: json['items']});
      };
      constructor(props) {
        super(props);
        this.state = {
          videos: [],
        }
      }
      render() {
        const videos = this.state.videos;
        return (
          <SafeAreaView style={styles.safeArea}>
                <FlatList
                  data={videos}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={
                    ({item}) => 
                    <TouchableOpacity
                        style={styles.demacate}
                        onPress={() => this.watchVideo(item.contentDetails.videoId)}
                    >
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
        backgroundColor: '#E3DFFF'
      },
      demacate: {
        borderBottomColor: '#A0AAFF',
        borderBottomWidth: 2,
        borderRadius:10
      },
      item: {
        padding: 10,
        fontSize: 12,
        height: 44,
      },
    });
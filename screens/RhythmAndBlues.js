import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Button } from 'react-native'
import secrets from '../secrets'

const MAX_RESULT = 30; 
const PLAYLIST_ID = "PL4W7Aa3_xVcfplsKGVyAEtKgpWaZ05cyf"; 
const API_KEY = API_KEY_SECRET;
export default class RnB extends Component {
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
        const {navigate} = this.props.navigation
        return (
          <SafeAreaView style={styles.safeArea}>
             <TouchableOpacity   style={styles.button}
                        onPress={() => navigate('RnB Playlist')}>
                  <Text style={{ textAlign: 'center', color: 'black', fontSize: 28, paddingTop: 8 }}>Go To Playlist</Text>
              </TouchableOpacity>
                <FlatList
                  data={videos}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={
                    ({item}) => 
                    <TouchableOpacity
                        style={styles.demacate}
                        onPress={() => navigate('Video')}
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
        backgroundColor: '#F9DEE2'
      },
      demacate: {
        borderBottomColor: '#F989AD',
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
        backgroundColor: '#F989AD'
      }
    });
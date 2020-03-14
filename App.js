import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Mellow from './screens/Mellow'
import Funky from './screens/Funky'
import GoodBeats from './screens/GoodBeats'
import RnB from './screens/RhythmAndBlues'
import WatchVideo from './screens/Video'
import GoodBeatsPlaylist from './playlists/GoodBeatsPlaylist'
import FunkyPlaylist from './playlists/FunkyPlaylist'
import MellowPlaylist from './playlists/MellowPlaylist'
import RnBPlaylist from './playlists/RnBPlaylist'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 30}}>WHAT'S THE VIBE?</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Funky')}
        style={{ backgroundColor: '#EAFFF7', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#35C687', textAlign: 'center' }}>FUNKY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Mellow')}
        style={{ backgroundColor: '#FFF5C4', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#FFD026', textAlign: 'center' }}>MELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Good Beats')}
        style={{ backgroundColor: '#E3DFFF', height: 80}}>
        <Text style={{ fontSize: 45, color: '#A0AAFF', textAlign: 'center' }}>GOOD BEATS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Rhythm and Blues')}
        style={{ backgroundColor: '#F9DEE2', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#F989AD', textAlign: 'center'}}>RHYTHM & BLUES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Video')}
        style={{ backgroundColor: '#C4FBFF', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#36B9ED', textAlign: 'center'}}>SURPRISE ME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 20
  }
});

const Stack = createStackNavigator();

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Funky" component={Funky}/>
        <Stack.Screen name="Mellow" component={Mellow}/>
        <Stack.Screen name="Good Beats" component={GoodBeats}/>
        <Stack.Screen name="Rhythm and Blues" component={RnB}/>
        <Stack.Screen name="Video" component={WatchVideo}/>
        <Stack.Screen name="Good Beats Playlist" component={GoodBeatsPlaylist}/>
        <Stack.Screen name="Funky Playlist" component={FunkyPlaylist}/>
        <Stack.Screen name="Mellow Playlist" component={MellowPlaylist}/>
        <Stack.Screen name="RnB Playlist" component={RnBPlaylist}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


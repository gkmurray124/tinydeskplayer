import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MellowPlaylist from './screens/Mellow'
import FunkyPlaylist from './screens/Funky'
import GoodBeatsPlaylist from './screens/GoodBeats'
import RnBPlaylist from './screens/RhythmAndBlues'


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 30}}>WHAT'S THE VIBE?</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Funky Playlist')}
        style={{ backgroundColor: '#EAFFF7', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#35C687', textAlign: 'center' }}>FUNKY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Mellow Playlist')}
        style={{ backgroundColor: '#FFF5C4', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#FFD026', textAlign: 'center' }}>MELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Good Beats Playlist')}
        style={{ backgroundColor: '#E3DFFF', height: 80}}>
        <Text style={{ fontSize: 45, color: '#A0AAFF', textAlign: 'center' }}>GOOD BEATS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Rhythm and Blues Playlist')}
        style={{ backgroundColor: '#F9DEE2', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#F989AD', textAlign: 'center'}}>RHYTHM & BLUES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('You chose Mix It Up!')}
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
        <Stack.Screen name="Funky Playlist" component={FunkyPlaylist}/>
        <Stack.Screen name="Mellow Playlist" component={MellowPlaylist}/>
        <Stack.Screen name="Good Beats Playlist" component={GoodBeatsPlaylist}/>
        <Stack.Screen name="Rhythm and Blues Playlist" component={RnBPlaylist}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


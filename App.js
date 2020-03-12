import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{header: true, textAlign: 'center', fontSize: 30}}>WHAT'S THE VIBE?</Text>
      
      <TouchableOpacity
        onPress={() => alert('You chose Funky!')}
        style={{ backgroundColor: '#EAFFF7', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#35C687', textAlign: 'center', verticalAlign: 'middle' }}>FUNKY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('You chose Mellow!')}
        style={{ backgroundColor: '#FFF5C4', height: 80 }}>
        <Text style={{ fontSize: 45, color: '#FFD026', textAlign: 'center' }}>MELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('You chose Good Beats!')}
        style={{ backgroundColor: '#E3DFFF', height: 80}}>
        <Text style={{ fontSize: 45, color: '#A0AAFF', textAlign: 'center' }}>GOOD BEATS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('You chose Rhythm & Blues!')}
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
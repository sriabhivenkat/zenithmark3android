import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { assets } from './react-native.config';

const getFonts = () => Font.loadAsync({
    'kollektif-bold': require('./assets/fonts/Kollektif-Bold.ttf'),
    'kollektif-bolditalic': require('./assets/fonts/Kollektif-BoldItalic.ttf'),
    'kollektif-italic': require('./assets/fonts/Kollektif-Italic.ttf'),
    'kollektif': require('./assets/fonts/Kollektif.ttf')
  });

//Export default means this is the main method, all code will end up here
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
            Zenith
        </Text>
      </Text>
    </View>
  );
  } else {
    return(
    <AppLoading 
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />)

  }
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    top:0, left:0, right:0, bottom:0
  },

  baseText: {
    fontFamily: "kollektif-bolditalic"
  },
  titleText: {
    fontSize: 70,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'black'
  }
});

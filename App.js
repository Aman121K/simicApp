
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mainstcak from './src/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';

const App= ()=>{
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return(
    <NavigationContainer >
      <Mainstcak/>
    </NavigationContainer>
  )
}
export default App;
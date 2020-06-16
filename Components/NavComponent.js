import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import TourList from './TourComponent';
import Main from './MainComponent';
import Tour from '../TourView/tour';

const screens ={
  Home:{
    screen: Main
  },
  Tour:{
    screen: Tour
  }
}

const Stack = createStackNavigator(
    {
        Home: {screen: Main},
        Tour: {screen: Tour}
    },
    {
    initialRouteName: 'Directory',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
    }
    )

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Main} />
        <Stack.Screen name='Tour' component={Tour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
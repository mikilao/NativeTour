import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TourList from './TourComponent';
import Main from './MainComponent';

const screens ={
  Home:{
    screen: Main
  },
  Tour:{
    screen: TourList
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
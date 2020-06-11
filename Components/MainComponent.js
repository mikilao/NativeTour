import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { SpacedGS, Colors } from '../styles';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Home from '.home'

import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation'

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView // recommended settings
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/Bridge.jpg')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}> Golden Gate Tour</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {//Header
        drawerLabel: 'About',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: Colors.lightBg
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={StyleSheet.stackIcon}
                onPress={() => navigation.toggleDrawer()} />
        })
    }
);
const HomeNavigator = createStackNavigator(
    {//chose which components are available 
        Home: { screen: Home },

    },
    {//Header
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: Colors.lightBg
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={StyleSheet.stackIcon}
                onPress={() => navigation.toggleDrawer()} />

        })
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {

                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }},
    {
        drawerBackgroundColor: Colors.redbtn,
        contentComponent: CustomDrawerContentComponent //render the new drawer content
    }
    )
export default class Main extends Component{
    render(){
        return (
        <ScrollView styles={styles.container}>
         
            <Text style={SpacedGS.title}>
                Profile
            </Text>
        </ScrollView>
        )
    }
}
const styles =StyleSheet.create ({
    container:{
    backgroundColor: Colors.darkBg},
          drawerHeader: {
            backgroundColor: '#5637DD',
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row'
        },
        drawerHeaderText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold'
        },
        drawerImage: {
            margin: 10,
            height: 60,
            width: 60
        },
        stackIcon: {
            marginLeft: 10,
            color: '#fff',
            fontSize: 24
        }
    
})
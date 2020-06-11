import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import {SpacedGS, Colors} from '../styles'
import { Icon} from 'react-native-elements';
import {tourdata} from '../tourdata'


const tour = //{tourdata}
    {
        id: 1,
        city: "North Beach Tour",
        price: "$109",
        name: "Museum tour",
        info:
          "Pork pork loin pancetta beef ribs pork chop, tail cupim t-bone Hamburger corned beef biltong pork loin tri-tip ground round beef ribs."
      }


export default function About() {

    return (
      <ScrollView style={styles.container}>
           <Text style={SpacedGS.title}>{tour.name}</Text>
           <Text style={styles.info}> {tour.price}, {tour.city}</Text>
           <View style={styles.div} />
                          
    <Text style={SpacedGS.sectionTitle}>About {tour.name}</Text>
    <Text style={styles.about}>{tour.info}</Text>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      ...SpacedGS.sectionsContainer,
        backgroundColor:Colors.darkBg
  
    },
    info:{
        color: Colors.textSec,
        fontWeight: "600",
        marginTop: 4
    }, 
    about:{
        fontSize: 13,
        color: Colors.textSec,
        marginTop: 6,

    }
   
  
  });
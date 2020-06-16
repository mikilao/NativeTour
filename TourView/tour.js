import React, { Component } from "react"
import { View, Text, Card, ScrollView, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import {Colors} from "../styles"

class Tour extends Component {
    state = {
        showInfo: false //for the display
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const { city, info, id, img, name } = this.props.tour;
        const { removeTour } = this.props;

        return (
            <ScrollView style={styles.container}>

                <View className="tour">

                    <Image id="img" alt="/" width="500px" src={img} />
                    <Text> {name}  </Text>
                    <Icon
                        name='close'
                        type='font-awesome'
                        onClick={() => { removeTour(id) }} />


                </View>
                <View className="tour-info">
                    <h3> {city}</h3>
                    <Button name="tourbtn" type='font-awesome' onPress={this.handleInfo} />More



            <Text> {this.state.showInfo} {info}</Text>

                </View>
            </ScrollView>

        )
    }
}
export default Tour

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.darkBg,
  
    },
    rowCenter:{
      flexDirection:'row',
      justifyContent: 'space-between'
    }
  
  });
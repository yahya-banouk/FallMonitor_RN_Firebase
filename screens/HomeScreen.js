import { StyleSheet, Text, View } from 'react-native'
import React, { useState, componentDidMount, Component} from 'react'

class HomeScreen extends Component{
  
  constructor()
  {
    super();
    this.state =
    {
      sensoValue : 0
    };
  }
  
  componentDidMount()
  {
    
    setInterval(()=>{this.setState({sensoValue : (Math.random() * (67 - 60) + 60).toFixed(5)}) ;},1000)

  }


  render()
  {
      return (
      <View>
        <Text>{this.state.sensoValue}</Text>
      </View>
      )
  }
 
}

export default HomeScreen

const styles = StyleSheet.create({})
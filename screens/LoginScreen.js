import { View, Text,  StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior= "padding" >
        <View style={styles.inputContainer}>
        <TextInput placeholder='Email'
            //value={}
            //onChangeText={text => }
            style = {styles.input}/>
          <TextInput placeholder='Email'
            //value={}
            //onChangeText={text => }
            style = {styles.input}
            secureTextEntry/>

          
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={()=>{

          }}
          style={styles.button}
          >
            <Text style={styles.button}>Login</Text>
            

          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{

          }}
          style={[styles.buttonText, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Regiter</Text>
            

          </TouchableOpacity>

        </View>


    </KeyboardAvoidingView>
   
    
  )
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex : 1,
      justifyConttent: 'center',
      alignItems : 'center',
      

    },
    input:
    {
      width: '80%'

    },
    buttonContainer:
    {

    },
    button:
    {

    },
    buttonOutline :
    {

    },
    buttonOutlineText :
    {

    },
    buttonText:
    {
      
    }

    
  }
)

export default LoginScreen
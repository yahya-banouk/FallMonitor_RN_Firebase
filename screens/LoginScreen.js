import { View, Text,  StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {db } from '../firebaseConfig/config'

 

const LoginScreen = () => {
  const [username,setName] = useState('');
  const [password,setPassword] = useState('');
  function create()
  {
    set(ref(db, 'users/' + password), {
      username: username,
      password: password
    }).then(()=>{
      alert('data saved');
    })
    .catch((error)=>
    {
      alert(error);
    });
     
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior= "padding" >
        <View style={styles.inputContainer}>
        <TextInput placeholder='Email'
            value={username}
            onChangeText={(username) =>{setName(username)} }
            style = {styles.input}/>
          <TextInput placeholder='password'
            value={password}
            onChangeText={(password) => {setPassword(password)} }
            style = {styles.input}
            secureTextEntry/>

          
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={create}
          style={styles.button}
          >
            <Text style={styles.button}>Login</Text>
            

          </TouchableOpacity>
          <TouchableOpacity
          onPress={create}
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
      width: '90%',
      fontSize: 18,
      padding: 12,
      borderColor: 'gray',
      borderWidth: 0.3


    },
    buttonContainer:
    {

    },
    button:
    {
      fontSize: 18

    },
    buttonOutline :
    {
      fontSize: 18

    },
    buttonOutlineText :
    {
      fontSize: 18

    },
    buttonText:
    {
      
    }

    
  }
)

export default LoginScreen
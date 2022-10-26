import {ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
   View , Text,  StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {db } from '../firebaseConfig/config'
import CustomBox from "react-native-customized-box";
 

const LoginScreen = ({navigation}) => {
  const [UserId,setUserId] = useState('');
  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [BoxId,setBoxId] = useState('');
  
  
  
  function create()
  {
    set(ref(db, 'users/' + PhoneNumber), {
      UserId: UserId,
      FirstName: FirstName,
      LastName:LastName,
      Email:Email,
      Password:Password,
      PhoneNumber:PhoneNumber,
      BoxId: BoxId,
      

    }).then(()=>{
      alert('data saved');
    })
    .catch((error)=>
    {
      alert(error);
    });
    navigation.navigate("Home");
     
  }
 
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior= "padding" >
        {/* <View style={styles.inputContainer}>
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

        </View> */}
        


 return (
      <View style={{ backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ paddingTop: 20 }}>
        <View style={styles.container}>
          
          <Text style={styles.header}>Create Account to take care!</Text>
          <Image
            style={styles.registerImage}
            source={{
              uri: "https://user-images.githubusercontent.com/11225821/40580715-f79faf5a-60f0-11e8-88b5-da99813517cc.png",
            }}
          />
         
          {/* UserId */}
          <CustomBox
            placeholder={"UserId"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "grey",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "UserId",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            requiredConfig={{
              text: "*You don't need to provide user Id",
            }}
            onChangeText={(value) => {
              setUserId(value);
            }}
            
          />
          {/* First Name */}
          <CustomBox
            placeholder={"First Name"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "First Name",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            
            
            onChangeText={(value) => {
              setFirstName(value);
            }}
          />
          {/* Last Name */}
          <CustomBox
            placeholder={"Last Name"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Last Name",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
           
            onChangeText={(value) => {
              setLastName(value);
            }}
          />
          {/* Email Id */}
          <CustomBox
            placeholder={"Email"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            type={"email"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Email",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            
            onChangeText={(value) => {
              setEmail(value);
              
            }}
          />
          {/* Password */}
          <CustomBox
            placeholder={"Password"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
              overflow: "hidden",
            }}
            labelConfig={{
              text: "Password",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            toggle={true}
            
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
          <CustomBox
            placeholder={"Phone number"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            type={"phone number"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "Phone number",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            
            onChangeText={(value) => {
              setPhoneNumber(value);
              
            }}
          />
          <CustomBox
            placeholder={"BoxId"}
            boxColor={"silver"}
            focusColor={"#e07964"}
            type={"phone number"}
            boxStyle={{ borderRadius: 40, borderWidth: 3 }}
            inputStyle={{
              fontWeight: "bold",
              color: "#30302e",
              paddingLeft: 20,
              borderRadius: 40,
            }}
            labelConfig={{
              text: "BoxId",
              style: {
                color: "#0e0e21",
                fontWeight: "bold",
              },
            }}
            
            onChangeText={(value) => {
              setPhoneNumber(value);
              
            }}
          />
          {/* Login Button */}
          <TouchableOpacity
            style={styles.registerbtn}
            
            onPress={create}
          >
            <Text style={styles.registerBtnText}>Submit</Text>
            {/*loading && loading ? (
              <ActivityIndicator style={styles.indicator} color={"white"} />
            ) : null*/}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>



    // </KeyboardAvoidingView>
   
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorCard: {
    width: 300,
    height: 50,
    backgroundColor: "#de3138",
    justifyContent: "center",
    paddingLeft: 15,
    borderRadius: 40,
  },
  errorCardText: {
    paddingLeft: 15,
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    position: "absolute",
  },
  cross: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    left: 250,
    position: "relative",
  },
  registerImage: {
    marginTop: 20,
    width: 200,
    height: 180,
  },
  myLogo: {
    width: 100,
    height: 70,
    borderRadius: 40,
    left: 150,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
  },
  registerbtn: {
    marginTop: 10,
    backgroundColor: "#e65c40",
    width: 300,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    flexDirection: "row",
  },
  registerBtnText: {
    color: "white",
    fontSize: 22,
  },
});
export default LoginScreen
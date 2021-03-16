import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const checkEmailInput= () => {
      if (email != '')
        return true
      return false
    };

    const checkPasswordInput= () => {
      if (password != '')
        return true
      return false
    };

    const checkFirstNameInput= () => {
      if (firstName != '')
        return true
      return false
    };

    const checkLastNameInput= () => {
      if (lastName != '')
        return true
      return false
    };

    const checkInput = (fieldName) => {
      if(fieldName.length == 0){
        return false;
      }
      return true;

    }

    const buttonClickListener = (navigation) => {
      if (checkEmailInput() == true && checkPasswordInput() == true && checkFirstNameInput()== true && checkLastNameInput()==true){
        navigation.reset({
          index: 0,
          routes: [
            {
                name: 'Home',
                params: { someParam: 'Param1'},
            },
          ],
        })
      }
      
      //Not the most convenient but it works for now
      else if (checkEmailInput()==false && checkPasswordInput()==true && checkFirstNameInput()==true && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==true && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email and password field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email, password, and first name field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==true && checkLastNameInput()==false){
        alert('Invalid Response: Please enter email, password, and last name field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter all fields');
      }
      else if (checkEmailInput()==true && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter password, first name, and last name fields'); 
      }
      else if (checkEmailInput()==true && checkPasswordInput()==true && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter first name and last name field');
      }
      else if (checkEmailInput()==true && checkPasswordInput()==true && checkFirstNameInput()==true && checkLastNameInput()==false){
        alert('Invalid Response: Please enter last name field');
      }
      else {
        alert('Invalid Response');
      }
    };
  
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../resources/MovieMatchLogo.png')} />
     
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name"
              placeholderTextColor="#003f5c"
              onChangeText={(firstName) => setFirstName(firstName)}
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(lastName) => setLastName(lastName)}
            />
          </View>

          <TouchableOpacity style={styles.register_button} onPress={() =>
                buttonClickListener(navigation)}>
            <Text style={styles.loginText}>REGISTER</Text>
          
          </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },

    register_button: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#99ccff",
    },
  });
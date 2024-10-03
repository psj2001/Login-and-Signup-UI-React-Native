import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topVector.png')} style={styles.topImage} />
      </View>

      <View>
        <Text style={styles.createAccountText}>Create account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Username' />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name={"mail"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Email' />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name={"mobile1"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Mobile' />
      </View>

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Create</Text>
        <LinearGradient colors={['#F97794', '#623AA2',]} style={styles.linearGradient}>
          <AntDesign name={"arrowright"} size={24} color={"white"} style={styles.inputIcon} />
        </LinearGradient>
      </View>
      <View style={styles.footercontainer}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>Or create account using social media</Text>
          <View style={styles.socialmediaContainer}>
            <Entypo name={"facebook-with-circle"} size={30} color={"blue"} style={styles.socialIcon} />
            <Entypo name={"twitter-with-circle"} size={30} color={"blue"} style={styles.socialIcon} />
            <AntDesign name={"google"} size={30} color={"blue"} style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require("../assets/leftVector.png")} style={styles.leftVectorImage} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: "relative"
  },
  topImageContainer: {

  },
  topImage: {
    width: '100%',
    height: 130
  },
  hellocontainer: {

  }, hellotext: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: '500',
    color: '#262626'
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: '#262626',
    fontWeight: "bold",
    marginBottom: 30
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
  inputIcon: {
    marginLeft: 12,
    marginRight: 5,
  },
  textInput: {
    flex: 1
  },
  forgotPasswordText: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 20 ,
    justifyContent: "flex-end",
    width: "90%"
  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold"
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10

  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginTop:10,
    marginBottom:10

  },
  leftVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  leftVectorImage: {
    height: 350,
    width: 150,
  },
  footercontainer: {
    marginLeft: 25
  },
  socialIcon: {
    backgroundColor: "white",
    elevation: 10,
    margin: 10,
    padding: 10 ,
    borderRadius: 50
  },
  socialmediaContainer:{
    display: "flex",
    flexDirection:"row",
    justifyContent: 'center',
    
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emil: "",
      password: ""


    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log in</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password" />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signupupText}>Sign up</Text>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginHorizontal: 50
  },
  loginText: {
    fontSize: 50,
    color: "#5100ad"

  },

  loginTextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop:20
  },

  forgotPassword:{
    alignSelf:"flex-end",
    marginVertical:3,
    color:'blue'
  },

  buttonContainer:{
    height:50,
    backgroundColor:"#5100ad",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginVertical:50
  },

  buttonText:{
    color:"white",
    fontSize:25,

  },

  noAccountContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },

  noAccountText:{
    marginRight:10,
    fontSize:16

  },

  signupupText:{
    fontSize:16,
    color:"#5100ad"
  }
})


export default App;


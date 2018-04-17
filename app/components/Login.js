import React from 'react';
import { StyleSheet, Text, View , DrawerLayoutAndroid , ScrollView , ToastAndroid , ToolbarAndroid,
         TouchableOpacity , Button , TextInput , Alert , ActivityIndicator
       } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './Main';
import * as firebase from 'firebase';

//initialize Firebase
const config = {
    apiKey: "AIzaSyCMfNubvsmUwCIwRDzf_kjoUU2FPJ_c7_Q",
    authDomain: "aavishkar-app-2019.firebaseapp.com",
    databaseURL: "https://aavishkar-app-2019.firebaseio.com",
    projectId: "aavishkar-app-2019",
    storageBucket: "aavishkar-app-2019.appspot.com",
    messagingSenderId: "1072472801800"
  };
  firebase.initializeApp(config);

export default class Login extends React.Component {
  static navigationOptions = {
      header: null
     };


  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      status : false,
      loaded : false,
    }

  }


  componentDidMount()
  {
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      this.setState({ status : true ,loaded : true});

    }
    else {
      this.setState({ status : false , loaded : true });
    }
  });

  }

  logOut(){
    firebase.auth().signOut().then(() => {
        this.setState({ status : false , loaded : true })
}).catch((e) => {
        console.log(e.toString());
});
  }

  loginUser(email,password){

    try
    {
        firebase.auth().signInWithEmailAndPassword(email,password).then((user) => {
          //Alert.alert(user.email)
          this.setState({ status : true });
          //this.checkLogin();

        }).catch((err) => {
          Alert.alert(err.message)
        })
    }
   catch (e)
    {
        console.log(e.toString());
    }

}



  render() {

    if(this.state.status == true && this.state.loaded == true)
    {
      return <Main name = {this.logOut.bind(this)}/>;

    }
    else if(this.state.status == false && this.state.loaded == true)
    {
    return (
      <View style = { styles.container }>
      <Text style = {styles.logoText} >Aavishkar 2019</Text>
      <TextInput
       style = {styles.inputBox}
       underlineColorAndroid = 'rgba(0,0,0,0)'
       onChangeText = { (email) => this.setState({email}) }
       autoCorrect = { false } placeholder = 'Email' />
      <TextInput
      style = {styles.inputBox}
      underlineColorAndroid = 'rgba(0,0,0,0)'
      onChangeText = { (password) => this.setState({ password }) }
      secureTextEntry = {true} autoCorrect = {false} placeholder = 'Password'/>
      <Button color = '#424242' style = {styles.button} title = 'Login' onPress = { () => this.loginUser(this.state.email,this.state.password) } />
      <View style = {styles.signupTextContent}>
      <Text style = {styles.signupText} >Don't have an account ? Sign Up</Text>
      </View>
      </View>

    );
  }
  else
  {
     return (<View style = { styles.container }><ActivityIndicator size="large" color="#0000ff" /></View>);
  }


  }
}

//Styles
const styles = StyleSheet.create({
     container : {
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center'
     },
     inputBox:{
       width:'70%',
       borderRadius : 25,
       backgroundColor : '#E0E0E0',
       height:50,
       color:'#212121',
       padding : 10,
       fontSize : 15,
       margin : 10
     },
     button : {
       width:'70%',
       margin : 30
     },
     signupTextContent : {
       flexGrow : 0.4,
       alignItems : 'center',
       justifyContent : 'flex-end'
     },
     logoText : {
       fontSize : 25,
       marginBottom : 20
     }

});

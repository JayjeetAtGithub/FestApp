import React from 'react';
import { StyleSheet, Text, View , DrawerLayoutAndroid , ScrollView , ToastAndroid , ToolbarAndroid,
         TouchableOpacity , Button , TextInput , Alert , ActivityIndicator , KeyboardAvoidingView
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
        this.setState({ status : false , loaded : true , email : '' , password : '' })
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
          Alert.alert('Warning !',err.message);
        })
    }
   catch (e)
    {
        console.log(e.toString());
    }

}



  render() {
    const { navigate } = this.props.navigation;
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
      <TouchableOpacity style = {styles.button} onPress = { () => this.loginUser(this.state.email,this.state.password) }><Text style = { styles.buttonText } >Login</Text></TouchableOpacity>
      <View style = {styles.signupTextContent}>
      <View style = {styles.signUpView} ><Text style = {styles.signupText} >Don't have an account ?</Text><TouchableOpacity onPress = { () => navigate('Logout') } ><Text style = { styles.signupText } >Sign Up</Text></TouchableOpacity></View>
      </View>
      </View>

    );
  }
  else
  {
     return (<View style = { styles.container }><ActivityIndicator size="large" color="#fff" /></View>);
  }


  }
}

//Styles
const styles = StyleSheet.create({
     container : {
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center',
       backgroundColor : 'rgb(32,53,70)'
     },
     inputBox:{
       width:'75%',
       borderRadius : 25,
       backgroundColor : 'rgba(255,255,255,0.2)',
       height:40,
       color:'#fff',
       paddingHorizontal : 10,
       fontSize : 15,
       margin : 8,
     },
     button : {
       width:'75%',
       backgroundColor  :'#f7c744',
       alignItems : 'center',
       padding: 10,
       marginTop:10,
       marginBottom : 20,
       borderRadius : 25,
       justifyContent : 'center',
       elevation : 8,
     },
     buttonText : {
        color : '#fff',
        fontSize : 15
     },
     signupTextContent : {
       alignItems : 'center',
       justifyContent : 'flex-end',
       marginTop : 10
       
     },
     signupText:{
      color:'#fff',
      fontWeight : 'bold'

     },
     logoText : {
       fontSize : 25,
       marginBottom : 60,
       color:'#fff',
       padding:20,
       fontWeight : 'bold'
     },
     signUpView : {
      flexDirection : 'row',
     }

});


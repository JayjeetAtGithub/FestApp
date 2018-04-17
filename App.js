import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './app/components/Main';
import Login from './app/components/Login';


// class HomeScreen extends React.Component{
//   static navigationOptions = {
//     title : 'Home',
//   };
//   render(){
//     const { navigate } = this.props.navigation;
//     return(
//       <View style = {styles.container}>
//       <Text onPress = { () => navigate('Profile') }>Navigate to profile</Text>
//       </View>
//     );
//
//   }
// }
// class ProfileScreen extends React.Component{
//   static navigationOptions = {
//     title : 'Profile',
//   };
//   render(){
//     const { navigate } = this.props.navigation;
//     return(
//       <View style = {styles.container}>
//       <Text onPress = { () => navigate('Home') }>Navigate to Home</Text>
//       </View>
//     );
//
//   }
// }



const NavigationApp = StackNavigator({
  Login : { screen : Login },
});

export default class App extends React.Component {
  render() {
    return (
      <NavigationApp  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex : 1,
     alignItems : 'center',
     justifyContent : 'center'
  },
});

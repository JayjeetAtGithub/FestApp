import React from 'react';
import { StyleSheet, Text, View , ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';



const NavigationApp2 = StackNavigator({

  Home:{ screen :Home },
  Profile : { screen : Profile },

});

export default class Main extends React.Component {
  static navigationOptions = {
      header: null
     };

  constructor(props){
    super(props);
  }

  render() {
    //ToastAndroid.show(this.props.name,ToastAndroid.SHORT);
    return (
      <NavigationApp2 screenProps = {this.props.name} />
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

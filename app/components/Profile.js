import React from 'react';
import { StyleSheet, Text, View , DrawerLayoutAndroid , ScrollView , ToastAndroid , ToolbarAndroid,
         TouchableOpacity
       } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Profile extends React.Component {
  static navigationOptions = {
      header: null
     };
  constructor(props){
    super(props);

  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
      <Text>Profile Page</Text>
      <TouchableOpacity onPress = {this.props.screenProps} style = { styles.logoutButton }>
      <Text style = {{ fontSize : 15 }}>Logout</Text>
      </TouchableOpacity>
      </View>

    );
  }
}

//Styles
const styles = StyleSheet.create({
     container : {
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center'
     },
     logoutButton : {
       alignItems: 'center',
       width:'80%',
       elevation : 10,
       zIndex : 8,
       backgroundColor: '#DDDDDD',
       padding: 10,
       paddingBottom : 15
     }
});

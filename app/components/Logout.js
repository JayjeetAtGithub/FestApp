import React from 'react';
import { StyleSheet, Text, View , DrawerLayoutAndroid , ScrollView , ToastAndroid , ToolbarAndroid,
         TouchableOpacity
       } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Logout extends React.Component {
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
      <Text>Sign up Page</Text>
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
     }
});

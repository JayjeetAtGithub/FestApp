import React from 'react';
import { StyleSheet, Text, View , DrawerLayoutAndroid , ScrollView , ToastAndroid , ToolbarAndroid,
         TouchableOpacity
       } from 'react-native';
import ImageCard from  './ImageCard';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Home extends React.Component {
  static navigationOptions = {
      header: null
     };
  constructor(props){
    super(props);
    this.navigate = props.navigation.navigate.bind(this);

  }

  navItemClick(s){
    ToastAndroid.show('Item ' + s + ' was Clicked', ToastAndroid.SHORT);
  }
  open(){
    this.refs.appDrawer.openDrawer();
  }

  render() {
    //The navigation Drawer Layout
    var navigationView = (

      <View style = { styles.navView }>
      <View style = { styles.topbar }>
        <Text style ={ styles.textView }>Hello,Jayjeet</Text>
      </View>
      <ScrollView style = { styles.navItemView }>
      <Text onPress = { this.navItemClick.bind(this , 'A') } style = { styles.navItem }>Home</Text>
      <Text onPress = { this.navItemClick.bind(this , 'B') } style = { styles.navItem }>Schedule</Text>
      <View style = {styles.lineStyle} />
      <Text onPress = { this.navItemClick.bind(this , 'C') } style = { styles.navItem }>Online</Text>
      <Text onPress = { this.navItemClick.bind(this , 'D') } style = { styles.navItem }>Onsite</Text>
      <Text onPress = { this.navItemClick.bind(this , 'E') } style = { styles.navItem }>Workshops</Text>
      <Text onPress = { this.navItemClick.bind(this , 'F') } style = { styles.navItem }>Exhibitions and Games</Text>
      <View style = {styles.lineStyle} />
      <Text onPress = { this.navItemClick.bind(this , 'G') } style = { styles.navItem }>Partners</Text>
      <Text onPress = { this.navItemClick.bind(this , 'H') } style = { styles.navItem }>Map</Text>
      <Text onPress = { this.navItemClick.bind(this , 'I') } style = { styles.navItem }>Contact</Text>
      <Text onPress = { this.navItemClick.bind(this , 'J') } style = { styles.navItem }>Contributors</Text>
      <Text onPress = { this.navItemClick.bind(this , 'K') } style = { styles.navItem }>About Aavishkar</Text>
      </ScrollView>

      </View>
      );
     //ToastAndroid.show('OKK',ToastAndroid.SHORT);
    return (

      <DrawerLayoutAndroid
      ref = 'appDrawer'
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      drawerBackgroundColor = "rgba(0,0,0,0.5)"
      renderNavigationView={() => navigationView}>

      <View style = { styles.toolbar }>
      <TouchableOpacity>
      <Icon onPress = {this.open.bind(this)} name = 'ios-menu' size = {30} color = 'white' />
      </TouchableOpacity>
      <Text style = { styles.toolbarText }>Aavishkar 2019</Text>
      <View style = {styles.rightTool}>
      <TouchableOpacity>
      <Icon onPress = { () => this.navigate('Profile') } style = {styles.profileicon} name='md-contact' size = {30} color = 'white' />
      </TouchableOpacity>
      </View>
      </View>
      <ScrollView>
      <View style = { styles.card }>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      </View>
      </ScrollView>
    </DrawerLayoutAndroid>

    );
  }
}









//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navView : {
    flex :1,
    backgroundColor : '#FFF'
  },
  textView : {

    color : '#fff',
    fontSize : 20,
    textAlign : 'center',
    marginTop : '15%',
    fontWeight: 'bold'

  },
  picker : {
    marginLeft:'10%',
    marginRight:'10%',
    marginTop : '20%',
    width: '70%',
    alignItems : 'center'
  },
  topbar : {
    height : '20%',
    width : '100%',
    backgroundColor : '#424242',
  },
  navItemView:{
    flex : 1,

  },
  navItem : {
    fontSize : 15,
    textAlign : 'center',
    margin:'6%'

  },
  lineStyle:{
    borderBottomWidth: 0.5,
    borderBottomColor:'#424242',

      },
    card : {
      marginLeft:'1%',
      marginRight:'1%',
      marginTop:'2%',
      marginBottom : '3%',
    },
    toolbar : {
      height:80,
      backgroundColor : '#006064',
      flexDirection : 'row',
      justifyContent : 'space-between',
      paddingTop : 20,
      paddingLeft : 10,
      paddingRight : 10,
      elevation : 11,
      zIndex : 10,
      alignItems : 'center',
    },
    toolbarText : {
      color : '#fff',
      fontSize : 20
    },
    // profileicon : {
    //   position : 'absolute',
    //   right : 0,
    //   paddingTop:20,
    //   paddingRight: 10
    // }

});

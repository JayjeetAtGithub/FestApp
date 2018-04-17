import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView , ToastAndroid , TouchableOpacity
       } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ImageCard extends React.Component {

  constructor(props){
    super(props);

  }

  render() {
    return (

          <View style = { styles.imageCard }>
            <View style = { styles.cardTop }>
            <Text style = { styles.imageCardTitle }>MVC with ROR</Text>
            <Text style = { styles.imageCardDate }>Posted on : 12 March</Text>
            </View>
            <Image style = { styles.image } source = {{ uri : 'http://nitdgplug.org/images/uploads/21077308_313341582408571_7620829900631534671_n.jpg' }} />
            <View style = { styles.bottombar }>
            <TouchableOpacity>
            <Icon name = 'ios-thumbs-up-outline' size = {35}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name = 'ios-text-outline' size = {35}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name = 'md-share' size = {35}/>
            </TouchableOpacity>
            </View>
          </View>

    );
  }
}









//Styles
const styles = StyleSheet.create({
   image : {
     width : '100%',
     height: 250,

   },
   imageCard : {
     paddingLeft : '2%',
     paddingRight : '2%',
     paddingTop : '4%',
     paddingBottom : '3%',
     borderRadius :5,
    elevation : 5,
    zIndex : 8
  },
  imageCardTitle:{
    fontSize : 14,
    fontWeight : 'bold',
    textAlign : 'left',
    paddingBottom:'2%'
  },
  bottombar:{
    paddingTop : '2%',
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  imageCardDate : {
    fontSize : 12,
    color : '#757575',
    paddingBottom : '2%'
  },
  cardTop : {
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems : 'center'
  }
});

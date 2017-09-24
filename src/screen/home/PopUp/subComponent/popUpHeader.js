import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import PopUpComponemt from '../component/popUpComponent';

const minusImg = require('../../../../../assets/images/minus_green.png');


export default class PopUpHeader extends React.Component {
    render() {
        return (
          <View style={styles.listBackground}>
                    <View style={{paddingLeft:5,paddingRight:10}}>
                      <Text style={styles.listItemText}>{this.props.headerTitle}</Text>
                    </View>
                    <TouchableHighlight onPress={()=> {this.props.closePopUp()}} style={{position:'absolute',width:30,top:0,right:0,bottom:0}}>
                        <View style={styles.listItem}>
                        <Image style={{height:20,width:20,margin:2}} resizeMode="contain"
                          source={minusImg}/>
                          </View>
                    </TouchableHighlight>
                    </View>
        );
    }
}

const styles = StyleSheet.create({
  listItem: {
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      zIndex:1,
      //overflow: 'hidden',
      shadowOffset:{height:0,width:0}
  },
  listItemText:{
      color:'red', fontSize:20
  },
  listBackground:{
    marginLeft:10,marginRight:10, marginTop:5,
    backgroundColor:'rgb(255,255,255)',flexDirection:'row',opacity:1,borderRadius:5,padding:10
  }
});

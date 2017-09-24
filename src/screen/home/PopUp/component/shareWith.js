import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableOpacity,TouchableHighlight} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';
import RatingLogoComponent from '../subComponent/ratingLogoComponent'
import SocialMediaComponent from '../subComponent/socialMediaComponent'

const Images = {
  selfie: require('../../../../../assets/images/selfie.jpg'),
  instagramImg: require('../../../../../assets/images/instagram.png'),
  galleryImg: require('../../../../../assets/images/gallery.png')
}

export default class ShareWith extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View style={{backgroundColor:'white',marginTop:30,marginLeft:15,marginRight:15,paddingBottom:0,borderRadius:5}}>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
                <SocialMediaComponent/>
                <View style={{height:220,width:"100%",paddingTop:10,paddingBottom:10}}>
                <Image source={Images.selfie}
                 style={{height:200,width:"100%"}}
                 resizeMode={'contain'}/>
                </View>
                <View style={{paddingTop:10,paddingBottom:10,
                  paddingRight:40,paddingLeft:40}}>
                <TextInput multiline={true} numberOfLine={4}
                placeholder="Say Something..."
                style={{borderColor:'gray',borderRadius:5,fontSize:16,
                borderWidth:1,height:60,padding:10}}/>
                </View>
                <View style={{paddingTop:0,
                  paddingBottom:10,
                  paddingLeft:40,paddingRight:40,
                  flexDirection:'row',
                  justifyContent:'space-between'}}>
                <TouchableHighlight
                style={{backgroundColor:'white',borderColor:'red',flex:1,borderRadius:5,borderWidth:1,marginRight:10,paddingTop:10,paddingBottom:10}}
                onPress={()=>{}}>
                  <Text style={{color:'red',textAlign:'center',fontSize:16,fontFamily:'NunitoBoldItalic'}}>Another Pic</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={{backgroundColor:'rgb(68,176,165)',flex:1,borderRadius:5,marginLeft:10,paddingTop:10,paddingBottom:10}}
                onPress={()=>{}}>
                <Text style={{color:'white',textAlign:'center',fontSize:16,fontFamily:'NunitoBoldItalic'}}>Share</Text>
                </TouchableHighlight>
                </View>
              </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableOpacity} from 'react-native';
import PopUpHeader from '../subComponent/popUpHeader';
import RatingLogoComponent from '../subComponent/ratingLogoComponent'

const Images = {
  cameraImg: require('../../../../../assets/images/camara.png'),
  instagramImg: require('../../../../../assets/images/instagram.png'),
  galleryImg: require('../../../../../assets/images/gallery.png')
}

export default class TakeAPicWith extends React.Component {
  closePopUp = () => {
    alert("Pop up Closed.")
  }
    render() {
        return (
            <View style={{backgroundColor:'white',marginTop:30,marginLeft:15,marginRight:15,paddingBottom:0,borderRadius:5}}>
                <PopUpHeader headerTitle={this.props.headerTitle} closePopUp={this.closePopUp}/>
                <Text style={{marginTop:7,color:'gray',marginLeft:20,marginRight:20,textAlign:'center'}}>
                {this.props.title}</Text>
                <View style={{padding:0,flexDirection:'row',justifyContent:'space-around'}}>
                  <TouchableOpacity onPress={()=>{}}
                  style={{width:100,height:80}}>
                  <Image style={{width:"100%",height:"100%"}}
                  resizeMode={'contain'} source={Images.cameraImg}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{}}
                  style={{width:100,height:80}}>
                  <Image style={{width:"100%",height:"100%"}}
                  resizeMode={'contain'} source={Images.instagramImg}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{}}
                  style={{width:100,height:80}}>
                  <Image style={{width:"100%",height:"100%"}}
                  resizeMode={'contain'} source={Images.galleryImg}/>
                  </TouchableOpacity>
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

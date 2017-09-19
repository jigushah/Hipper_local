import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import Constant from '../../../services/apiConstant'


export default class experiencing_1 extends React.Component {

      render() {
        return (
          <View style={{flex:1}}>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
              <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
              </View>

            <NavBar/>
            <View style={{
                padding:15,
                backgroundColor:'rgb(240,240,240)',
                justifyContent:'center'}}>
                <Text style={{textAlign:'center',
                    fontFamily:'NunitoBoldItalic',
                    fontSize:18,
                    color:'rgb(121,121,121)'}}>
                    Experiencing Now
                </Text>
            </View>
            <View style={{
                padding:15,
                justifyContent:'center',
                backgroundColor: 'rgba(0,0,0,0)'}}>
                <Text style={{textAlign:'center',
                    fontFamily:'NunitoBoldItalic',
                    fontSize:18,
                    color:'white'}}>
                    The best of Rotchild
                </Text>
            </View>
            <View style={{marginLeft:10,marginRight:10,
                marginTop:5,marginBottom:5,backgroundColor:'rgb(255,255,255)',
                flexDirection:'row',opacity:1,borderRadius:5,padding:10}}>
                <View style={{paddingLeft:5,paddingRight:10}}>
                    <Text style={{color:'red',fontSize:16,fontFamily:'NunitoBoldItalic'}}>
                        RUSTICO
                    </Text>
                </View>
                <View style={{position:'absolute',width:30,top:0,right:0,bottom:0}}>
                    <View style={{
                        backgroundColor:'white',
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:5,
                        zIndex:1,
                        //overflow: 'hidden',
                        shadowOffset:{height:0,width:0}
                    }}>
                    <Image style={{height:20,width:20,margin:2}}
                           resizeMode="contain"
                           source={require('../../../../assets/images/plus_red.png')}
                    />
                    </View>
                </View>
            </View>
            <View style={{marginLeft:10,marginRight:10,
                marginTop:5,marginBottom:5,backgroundColor:'rgb(255,255,255)',
                flexDirection:'row',opacity:1,borderRadius:5,padding:10}}>
                <View style={{paddingLeft:5,paddingRight:10}}>
                    <Text style={{color:'green',fontSize:16,fontFamily:'NunitoBoldItalic'}}>
                        BENEDICT
                    </Text>
                </View>
                <View style={{position:'absolute',width:30,top:0,right:0,bottom:0}}>
                    <View style={{
                        backgroundColor:'white',
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:5,
                        zIndex:1,
                        //overflow: 'hidden',
                        shadowOffset:{height:0,width:0}
                    }}>
                    <Image style={{height:20,width:20,margin:2}}
                           resizeMode="contain"
                           source={require('../../../../assets/images/minus_green.png')}
                    />
                    </View>
                </View>
            </View>
          </View>
        );
    }
}

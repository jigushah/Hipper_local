import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import Constant from '../../../services/apiConstant'


export default class bookExperience extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            personCount: 1
        };
    }
    personMinus = () =>{
        debugger;
        if(this.state.personCount>1){
            this.setState({personCount:this.state.personCount-1})
        }
    };
    personPlus = () => {
       this.setState({personCount:this.state.personCount+1})
    }
    render() {
      const {experience} = this.props
        return (
            <View style={{flex:1}}>
                <NavBar/>
                <ScrollView>
                    <View style={{
                        padding:15,
                        backgroundColor:'rgb(240,240,240)',
                        justifyContent:'center'}}>
                        <Text style={{textAlign:'center',
                            fontFamily:'NunitoBoldItalic',
                            fontSize:18,
                            color:'rgb(121,121,121)'}}>
                            Book Experience
                        </Text>
                    </View>
                    <View style={{
                        padding:15,
                        backgroundColor:'white',
                        justifyContent:'center'}}>
                        <Text style={{textAlign:'center',
                            fontFamily:'NunitoBoldItalic',
                            fontSize:18,
                            color:'red'}}>
                            {experience.name}
                        </Text>
                    </View>
                    <View style={{height:Constant.screenHeight*.45,width:Constant.screenWidth}}>
                        <Image style={{height:'90%',width:Constant.screenWidth}}
                               resizeMode="stretch"
                               source={require('../../../../assets/images/image2.jpg')}/>
                        <View style={{flexDirection:'row',
                            position:'absolute',
                            alignItems:'flex-end',
                            bottom:0
                        }}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                                <View style={{paddingTop:5,
                                    paddingLeft:10,
                                    paddingBottom:0,
                                    paddingRight:10,
                                    margin:5,
                                    borderRadius:7,
                                    backgroundColor:'white',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    shadowColor:'gray',
                                    shadowOpacity:5,
                                    shadowRadius:5,
                                }}>
                                    <Image style={{height:20,width:20,alignSelf:'center'}}
                                           resizeMode={'contain'}
                                           source={require('../../../../assets/images/tag.png')}/>
                                    <Text>{experience.price}nis</Text>
                                </View>
                                <View style={{paddingTop:5,
                                    paddingLeft:10,
                                    paddingBottom:0,
                                    paddingRight:10,
                                    margin:5,
                                    borderRadius:7,
                                    backgroundColor:'white',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    shadowColor:'gray',
                                    shadowOpacity:5,
                                    shadowRadius:5,}}
                                >
                                    <Image style={{height:20,width:20,alignSelf:'center'}}
                                           resizeMode={'contain'}
                                           source={require('../../../../assets/images/distance.png')}/>
                                    <Text>{experience.distance}km</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                            <View style={{width:'60%',paddingLeft:10}}>
                                <Text style={{fontFamily:'NunitoRegular',
                                    fontSize:18,
                                    color:'rgb(121,121,121)'}}>
                                    Number of people
                                </Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={()=>{this.personMinus()}}
                                    style={{width:30,height:30,justifyContent:'center',
                                        shadowColor:'rgb(121,121,121)',backgroundColor:'white',
                                        shadowOpacity:0.3,
                                        shadowRadius:7
                                    }}>
                                    <Image style={{width:20,height:10,alignSelf:'center'}}
                                           resizeMode="contain"
                                           source={require('../../../../assets/images/minusNew.png')}/>
                                </TouchableHighlight>
                                <View style={{marginLeft:5,marginRight:5,
                                    width:30,height:30,backgroundColor:'transparent',
                                    alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:20,color:'rgb(121,121,121)'}}>{this.state.personCount}</Text>
                                </View>
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={()=>{this.personPlus()}}
                                    style={{width:30,height:30,justifyContent:'center',backgroundColor:'white',
                                        shadowColor:'rgb(121,121,121)',
                                        shadowOpacity:0.3,
                                        shadowRadius:7}}>
                                    <Image style={{width:25,height:25,
                                        alignSelf:'center'}}
                                           resizeMode="contain"
                                           source={require('../../../../assets/images/plusNew.png')}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View>
                            <View style={{backgroundColor:'red',height:2,marginTop:20}}/>
                            <View style={{flexDirection:'row',alignItems:'center',
                                paddingTop:10,paddingBottom:10,paddingLeft:5,
                                paddingRight:5,
                                justifyContent:'space-between'}}>
                                <Text style={{alignSelf:'center',justifyContent:'center',
                                    fontFamily:'NunitoBoldItalic',
                                    fontSize:18,
                                    color:'red'
                                }}>Total price</Text>
                                <Text style={{alignSelf:'center',justifyContent:'center',
                                    fontFamily:'NunitoBoldItalic',
                                    fontSize:18,
                                    color:'red'}}>{experience.price*this.state.personCount +'nis'}</Text>
                            </View>
                            <View style={{backgroundColor:'red',height:2}}/>
                            <View>
                                <View style={{borderRadius:15}}>
                                    <View style={{backgroundColor:'red',paddingTop:10,paddingBottom:10,borderRadius:5
                                    }}>
                                        <Text>Pay Now</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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

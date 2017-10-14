import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,TouchableHighlight} from 'react-native';
import StarRating from 'react-native-star-rating';
import Constant from '../../../../services/apiConstant'


export default class generatedExperienceCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0
        };
    }

    onStarRatingPress = (rating) =>
    {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={{paddingTop:20,paddingBottom:20
                    ,flex:1,height:Constant.screenHeight*.45,width:Constant.screenWidth
                }}>
                    <Image style={{flex:1,height:'100%',width:Constant.screenWidth}} source={this.props.imagePic}/>
                </View>
                <View style={{
                    position:'absolute',
                    alignItems:'flex-start',
                    top:0,
                    marginTop:30,
                    opacity:0.9,
                    backgroundColor:'white'
                }}>
                    <Text style={{color:'red',margin:7,fontFamily:'NunitoBoldItalic'}}>{this.props.title}</Text>
                </View>
                <View style={{flexDirection:'row',
                    position:'absolute',
                    alignItems:'flex-end',
                    bottom:0
                }}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={{paddingTop:5,
                            paddingLeft:10,
                            paddingBottom:5,
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
                                   source={require('../../../../../assets/images/tag.png')}/>
                            <Text>{this.props.cost}nis</Text>
                        </View>
                        <View style={{paddingTop:5,
                            paddingLeft:10,
                            paddingBottom:5,
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
                                   source={require('../../../../../assets/images/distance.png')}/>
                            <Text>{this.props.distance}km</Text>
                        </View>
                    </View>
                    <TouchableHighlight onPress={()=>this.props.onPressBooking(this.props.object)} style={{flex:1}}>
                        <View style={{paddingTop:12,
                            paddingLeft:0,
                            paddingBottom:12,
                            paddingRight:0,
                            margin:5,
                            borderRadius:7,
                            backgroundColor:'rgb(68,176,166)',
                            justifyContent:'center',
                            alignItems:'center',
                            shadowColor:'gray',
                            shadowOpacity:5,
                            shadowRadius:5,}}
                        >
                            <Text style={{color:'white',fontFamily:'NunitoBoldItalic',fontSize:17}}>Book your Experience</Text>
                        </View>
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

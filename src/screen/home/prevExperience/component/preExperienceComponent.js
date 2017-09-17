import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image} from 'react-native';
import StarRating from 'react-native-star-rating';


export default class preExperienceComponent extends React.Component {
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
    };

    render() {
        return (
            <View style={{marginLeft:20,marginRight:20,
                marginTop:15,marginBottom:5,backgroundColor:'rgb(255,255,255)',
                flexDirection:'row',opacity:1,borderRadius:5,padding:10}}>
                <View style={{paddingLeft:5,paddingRight:10}}>
                    <Text style={{color:'red',fontSize:16,fontFamily:'NunitoBoldItalic'}}>
                        {this.props.title}
                    </Text>
                    <Text style={{fontSize:14,fontFamily:'NunitoRegular'}}>
                        {this.props.date}
                    </Text>
                </View>
                <View style={{paddingLeft:5,paddingRight:10}}>
                    <Text style={{fontSize:14,fontFamily:'NunitoRegular'}}>
                        {this.props.place}
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <StarRating
                            disabled={false}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            starStyle={{padding:2}}
                            starSize={20}
                            halfStarEnabled={true}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            rating={this.state.starCount}
                            starColor={'red'}/>
                    </View>
                </View>
                <View style={{position:'absolute',width:30,top:0,right:0,bottom:0}}>
                    <View style={{
                        backgroundColor:'white',
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:5,
                        shadowColor:'gray',
                        shadowOpacity:1,
                        shadowRadius:3,
                        zIndex:1,
                        //overflow: 'hidden',
                        shadowOffset:{height:0,width:0}
                    }}>
                        <Image style={{height:20,width:20,margin:2}}
                               resizeMode="contain"
                               source={require('../../../../../assets/images/rightArrow.png')}
                        />
                    </View>
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

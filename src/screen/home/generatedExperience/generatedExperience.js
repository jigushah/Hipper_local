import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,ScrollView} from 'react-native';
import GeneratedExperienceCom from './component/generatedExperienceCom';
import NavBar from '../../navigationComponent/navigationBar';
import { connect } from 'react-redux';
import {getTourToken} from '../../../actions/tourAction'
const images = [
{image1:require('../../../../assets/images/image1.jpg')},
{image2:require('../../../../assets/images/image2.jpg')},
{image3:require('../../../../assets/images/image3.jpg')},
];

class generatedExperience extends React.Component {
  componentWillMount(){
    this.props.getTourToken();
  }
  //this.props.navigation.push("bookExperience");

  onPressBooking = (obj) => {
    this.props.navigator.push('bookExperience',{experience:obj});
  }

  render() {
      return (
            <View style={{flex:1}}>
                <NavBar/>
                <View style={{
                    padding:15,
                    backgroundColor:'rgb(240,240,240)',
                    justifyContent:'center'}}>
                    <Text style={{textAlign:'center',
                        fontFamily:'NunitoBoldItalic',
                        fontSize:18,
                        color:'rgb(121,121,121)'}}>
                        My Generated Experience
                    </Text>
                </View>
                <ScrollView style={{flex:1}}>
                {
                  this.props.generatedTourList.map((obj,index) => {
                    return <GeneratedExperienceCom title={obj.name}
                                            imagePic={require('../../../../assets/images/image1.jpg')}
                                            cost={obj.price} distance={obj.distance}
                                            key={index}
                                            object={obj}
                                            onPressBooking = {this.onPressBooking}
                                            />
                  })
                }
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
const mapStateToProps = (state) => ({
  generatedTourList: state.tour.generatedTourList
});


const mapActionToProps = ({
  getTourToken
});

export default connect(mapStateToProps, mapActionToProps)(generatedExperience);

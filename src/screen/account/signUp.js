import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,ScrollView,KeyboardAvoidingView} from 'react-native';
import NavigationBar from '../navigationComponent/navigationBar';
import Textbox from './component/textBox'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons'
import { signUpUser } from '../../actions/userAction'
import { connect } from 'react-redux';


class signUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'jinalshah123@gmail.com',
      password:'123456'
    }
  }
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
            <Image source={require("../../../assets/images/homeScreenBack.jpg")}/>
          </View>
          <View style={{backgroundColor:'transparent',flex:1}}>
            <NavigationBar/>
            <ScrollView>
            <View style={{margin:20}}>
              <Text style={{
                  fontSize:18,color:'white',
                  textAlign:'center',
                  fontFamily:'NunitoBold'}}>
                Create an Account
              </Text>
            </View>
            <View>
              <View>
                <Textbox placeHolder={"Email"}
                />
                <Textbox placeHolder={"Type a Password"}
                />
                <Textbox placeHolder={"Type password again"}/>
                <View style={{
                  height:1,backgroundColor:'white',
                    marginTop:5,marginBottom:5,
                    marginLeft:20,marginRight:20}}/>
                                <View style={{flexDirection:'row'}}>

                  <View style={{
                      flex:2,paddingRight:20,
                      paddingTop:5,paddingBottom:5,
                      opacity:0.8}}>
                  <View style={{flex:1,backgroundColor:'white',borderRadius:5,}}/>
                  </View>
                </View>

                <View style={{
                    height:1,backgroundColor:'white',
                    marginTop:5,marginBottom:5,
                    marginLeft:20,marginRight:20}}/>

              </View>
            </View>
            <TouchableHighlight onPress={() => {
                let newUser = {
                  email: this.state.email,
                  password: this.state.password
                }
                this.props.signUpUser(newUser)
                 .then(res => {
                   console.log(res.data)
                 })
                 .catch(err => {
                   debugger;
                 })
              }}>
              <View style={{
                padding:10,flexDirection:'row',
                backgroundColor:'rgb(119,206,28)',
                alignItems:'center',
                justifyContent:'center',borderRadius:0,
                marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
                <Text style={{marginLeft:10,color:'white',fontSize:20}}>Sign UP</Text>
              </View>
            </TouchableHighlight>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
              <TouchableHighlight onPress={() => {
                  this.navigateToPage('signUp')
              }} underlayColor="transparent" style={{}}>
                <View>
                  <Text style={{fontSize:18,color:'white'}}>Sign In</Text>
                  <View style={{height:1,backgroundColor:'white'}}/>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {
                  alert("Need Help! press");
              }} underlayColor="transparent">
                <View>
                  <Text style={{fontSize:18,color:'white'}}>Need Help?</Text>
                  <View style={{height:1,backgroundColor:'white'}}/>
                </View>
              </TouchableHighlight>
            </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
const mapStateToProps = (state) => {
          return{

          }
        };

const mapActionToProps = ({
  signUpUser,
});

export default connect(mapStateToProps, mapActionToProps)(signUp);

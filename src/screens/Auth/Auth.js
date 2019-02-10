import React, { Component } from "react";
import {View, Text} from 'react-native'
import {Navigation} from "react-native-navigation"

class AuthScreen extends Component{
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Home'
            },
          }
        };
      }


    render(){
        return(
            <View>
                <Text>
                    AuthScreen
                </Text>
            </View>
        )
    }
}

export default AuthScreen
// SignUp.js
import React from 'react'
import { StyleSheet, Text,View, Image, TouchableOpacity, } from 'react-native'

export default class PickRole extends React.Component {
  state = { email: '', password: '',name: ''}
//handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
//}
render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.imgur.com/tkMsHUW.png',}}
          style={{ marginTop : -85, width: 206, height: 200 }}
      />
        <Text style={{ fontSize : 20 }}>Bạn là ?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Đăng kí')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          <Image
          source={{uri: 'https://i.imgur.com/RPT2vY7.png',}}
          style={{  width: 21, height: 21 }}
      />
          Gia sư</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Đăng kí cho học sinh')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          <Image
          source={{uri: 'https://i.imgur.com/qYc4FUv.png',}}
          style={{  width: 21, height: 21 }}
      />
          Học sinh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Đăng kí cho học sinh')}
        >
          
          <Text style={{ fontSize : 18 }} > 
            Tiếp theo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop : 0,
    backgroundColor: `#A6F3B7`
    
  },
  
 
  button: {
    alignItems: 'center',
    marginTop : 18,
    width :200,
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 30,
    backgroundColor: '#ffffff',
  },
  button2: {
    //alignItems: 'flex-end',
    left :40,
    marginTop : 18,
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: '#E48257',
  },
  

})
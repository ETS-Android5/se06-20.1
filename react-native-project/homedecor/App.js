// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Image,TouchableOpacity, Alert } from 'react-native'
//import firebase from 'react-native-firebase'
export default class Login extends React.Component {
  state = { email: '', password: '',errorMessage: null}
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            //uri: 'https://i.pinimg.com/originals/e9/ac/20/e9ac206ef5ef07bc5d956ea63c7da060.jpg',
            uri: 'https://i.imgur.com/tkMsHUW.png',
          }  
          }
          style={{ marginTop : -150, width: 206, height: 200,alignItems: 'center', }}
      />
       
        
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="📧 Email" 
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="🔑 Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.button2}
          //onPress
        >
          
          <Text style={{ fontSize : 18, textDecorationLine: 'underline' }} > 
            Bạn quên mật khẩu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          //onPress={() => this.props.navigation.navigate('Home')}
          onPress={this.handleLogin}
        >
          
          <Text style={{ fontSize : 18 }} > 
            Đăng nhập
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
    backgroundColor: `#A6F3B7`
  },
  
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor : '#fcffff',
    borderRadius : 10
  },
  button: {
    marginTop: 18,
    height: 40,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding :7,
    borderRadius: 10,
  },
  button2: {
    marginTop: 0,
    height: 40,
    width: '70%',
    //alignItems: 'center',
    backgroundColor: `#A6F3B7`,
    padding :7,
    borderRadius: 10,
    
  },
})
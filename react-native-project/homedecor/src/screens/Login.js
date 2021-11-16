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
  async getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount() {
    this.getUser();
  }
  handleLogin = () => {
    const { email, password,data,isLoading } = this.state
    
    if(email == null || email ==""){
      Alert.alert("Lỗi, vui lòng nhập email");
      return;
    }
    if(password ==null || password ==""){
      Alert.alert("Lỗi, vui lòng nhập password");
      return;
    }
    if(email =="123" && password =="123"){
      () => this.props.navigation.navigate('Main')
      return;
    }
    if(email !=data.email || password !=data.username){
      Alert.alert("Lỗi, sai tài khoản hoặc mật khẩu");
      return;
    }
    this.props.navigation.navigate('Main');
    return;
    /*firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }*/
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
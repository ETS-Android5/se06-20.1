// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput,Image, ScrollView, TouchableOpacity } from 'react-native'

export default class SignUp extends React.Component {
  state = { email: '', password: '',name: '', }
//handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
//}
render() {
    return (
      //<View style={styles.container}>
      <ScrollView style={styles.container}>
        <Image
          source={{
            //uri: 'https://i.pinimg.com/originals/e9/ac/20/e9ac206ef5ef07bc5d956ea63c7da060.jpg',
            uri: 'https://i.imgur.com/tkMsHUW.png',
          }  
          }
          style={{ marginTop : 0, width: 206, height: 200, alignItems : 'center',left :80, }}
      />
        
        
        <Text style={{ fontSize : 18, left :40,}} > 
          <Image
          source={{uri: 'https://i.imgur.com/RPT2vY7.png',}}
          style={{  width: 21, height: 21, }}
        />
          Bạn là Gia Sư</Text>
        <TextInput
          placeholder="😀 Họ và Tên"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="📧 Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          secureTextEntry
          placeholder="🔑 Mật khẩu"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        
        <TextInput
          secureTextEntry
          placeholder="🎂 Ngày sinh"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="👦 Giới tính"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TextInput
          secureTextEntry
          placeholder="🏠 Địa chỉ"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          placeholder="📞Số điện thoại"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
        />
        <TextInput
          placeholder="📕Học vấn"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
        />
        <TextInput
          placeholder="🏫 Trường"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
        />
        <TextInput
          placeholder="⚗️Kinh nghiệm"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
        />
        <TextInput
          placeholder="🏆Giải thưởng"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
         
        />
        <TextInput
          placeholder="📚Môn học"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ phonenumber })}
          value={this.state.name}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Bạn là ?')}
        >
          
          <Text style={{ fontSize : 18 }} > 
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
        </ScrollView>
      //</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //marginTop : 0,
    backgroundColor: `#A6F3B7`,
    //left :40,
    flex: 1,
  },
  textInput: {
    height: 36,
    left :40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: `#fcffff`,
    borderRadius : 10,
    
  },
 
  button: {
    alignItems: 'center',
    marginTop : 18,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 1,
    backgroundColor: '#E48257',
  },
  

})
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Button, Alert,SafeAreaView,Image,ScrollView } from "react-native";
const Separator = () => (
  <View style={styles.separator} />
);
class Test extends Component {
  state = { name: '', age: '',name1: '', age1: '',errorMessage: null}
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }   
  
  async getUser() {
    try {
      const response = await fetch('https://612ced09ab461c00178b5fbb.mockapi.io/api/users/users');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  } 

  async postUser() {
    try {
      const response = await fetch('https://612ced09ab461c00178b5fbb.mockapi.io/api/users/users', {
        method: 'POST',
        body: JSON.stringify({
            Name: 'hoang',
            Age: '23', 
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
        },
      }); 
       
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }   
   
   GetToken=(token)=>{
        fetch('http://6971-2405-4803-fe72-c650-24e2-7ace-543-1e86.ngrok.io/login', {
            method: 'POST',
             body: JSON.stringify({
            
        email: "tranthia@gmail.com",
        password: "ahahaDongok99!"
}
        ),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'JWT'+ token, 

            }
        }).then((response) => response.json())

            .then((responseJson) => {
                console.log('response',responseJson)
                console.log('response',token)

            })
            .catch((error) => {
                console.error(error);
            });
    };
  
  async deleteUser(id) {
    try {
      const response = await fetch('https://612ced09ab461c00178b5fbb.mockapi.io/api/users/users/' + id, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    } 
  }
      
  async putUser(id) {
    try {
      const response = await fetch('https://612ced09ab461c00178b5fbb.mockapi.io/api/users/users/' + id , {
        method: 'PUT',
        body: JSON.stringify({
            Name: this.state.name1,
            Age: this.state.age1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
        },
      });
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
 
  componentDidMount() {
   //this.putUser()
    //this.deleteUser();
    //this.postUser();
    this.getUser();
  
  }

  render() {
    const { data, isLoading } = this.state;
  
    return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 21 }}>
        <View style = {styles.fixToText3} >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.GetToken()
            }
          >
            <Image
              source={{uri: 'https://image.flaticon.com/icons/png/512/992/992651.png',}}
              style={{  width: 30, height: 30, alignItems : "flex-end", marginBottom : 0, left :-5  }}
            /> 
          </TouchableOpacity> 

          <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder=" Name" 
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder=" age" 
          onChangeText={age => this.setState({ age })}
          value={this.state.age}
        />
        </View>

        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <ScrollView  >
                 
                <View style = {styles.fixToText}>
                
                  <Text style = {{width : 115}} >
                    Ten: {item.Name} 
                  </Text>
                  <Text style = {{width :95}}>
                     tuoi: {item.Age}, id: {item.id}
                  </Text>
              
                <View style = {styles.fixToText2} >     
                  <TouchableOpacity
                    style={styles.button}
                      onPress={() => this.putUser(item.id)}  
                 >
                    <Image
                      source={{uri: 'https://image.flaticon.com/icons/png/512/1827/1827933.png',}}
                      style={{  width: 21, height: 21, }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.deleteUser(item.id)}
                  >   
                    <Image 
                      source={{uri: 'https://image.flaticon.com/icons/png/512/3096/3096687.png',}}
                      style={{  width: 21, height: 21, left :5 }}
                    />
                  </TouchableOpacity>
                  </View>
                </View>
                <Separator />
                        <View style = {{flexDirection: 'row',marginTop : -10, marginBottom :10}} >
              
          <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder=" Name" 
          onChangeText={name1 => this.setState({ name1 })}
          value={this.state.name1}
        /> 
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder=" age" 
          onChangeText={age1 => this.setState({ age1 })}
          value={this.state.age1}
        />   
        </View>
              </ScrollView >
            )} 
          />
        )}
      </View>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: `#A6F3B7`,
  },
 separator: {
    marginTop: -15,
    marginBottom: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor : '#f0f1f2',
    marginBottom : 15,
    padding :12,
  },
  fixToText2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor : '#f0f1f2',
    marginBottom : 0,
    padding :0,
  },
  fixToText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom : 0,
    padding :10,
  },
  button: {
    borderRadius: 0,
  },
  textInput: {
    width: '40%', 
borderColor: 'white',
    borderWidth: 1,
    backgroundColor : '#faffff',
    borderRadius : 10,

  },
});
export default Test;
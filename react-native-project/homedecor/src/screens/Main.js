import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Button, Alert,SafeAreaView,Image,ScrollView } from "react-native";
const Separator = () => (
  <View style={styles.separator} />
);
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  onPress = () => {
    this.props.navigation.navigate('Tìm Lớp');
  };
  
  render() {
    //const { count } = this.state;
    return (
      
     <SafeAreaView style={styles.container}>
    <Separator />
    <View style={styles.fixToText}>
    <TouchableOpacity
          style={styles.button}
          backgroundColor = {'#CE7559'}
          onPress={this.onPress}
        >
           <Image
          source={{uri: 'https://i.imgur.com/j9IFFRJ.png',}}
          style={{  width: 21, height: 21 }}
      />
          <Text style={{ fontSize : 14 }} > 
         
         Tìm Lớp</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate('Học Tập')}
        >
          <Image
          source={{uri: 'https://i.imgur.com/tjqsgoe.png',}}
          style={{  width: 21, height: 21 }}
          />
          <Text style={{ fontSize : 14 }} > 
          Học Tập</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button3}
          onPress={() => this.props.navigation.navigate('Danh sách gia sư')}
        >
          <Image
          source={{uri: 'https://i.imgur.com/TmB2W5s.png',}}
          style={{  width: 21, height: 21 }}
          />
          <Text style={{ fontSize : 14 }} > 
          D/s gia sư
        </Text>
        </TouchableOpacity>
    </View>
    <Separator />
    <Text style={{ fontSize : 22 }}>  Danh sách lớp học đề xuất cho bạn</Text>
    <ScrollView horizontal={true}>
      
      <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32 , textAlign: 'center',}} > 
            Tìm gia sư toán 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          🕖 Dạy Thứ 2,4,6
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          👩Gia sư Nữ
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          Lương 180k/buổi
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 18 }} > 
            Xem chi tiết
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32 , textAlign: 'center',}} > 
            Tìm gia sư tiếng anh 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          🕖 Dạy Thứ 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          👦Gia sư Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          Lương 180k/buổi
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Đăng kí cho học sinh')}
          >
          <Text style={{ fontSize : 18 }} > 
            Xem chi tiết
          </Text>
        </TouchableOpacity>
      </View> 
        <View style = {styles.view1}>
          <Text style={{ fontSize : 14 , height : 32, textAlign: 'center',}} > 
            Tìm gia sư Hóa 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          🕖 Dạy Thứ 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          👦Gia sư Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          Lương 170k/buổi
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Đăng kí cho học sinh')}
          >
          <Text style={{ fontSize : 18 }} > 
            Xem chi tiết
          </Text>
        </TouchableOpacity>
        </View>
         <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32, textAlign: 'center', }} > 
            Tìm gia sư Vật Lý 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          🕖 Dạy Thứ 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          👦Gia sư Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          Lương 160k/buổi
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Đăng kí cho học sinh')}
          >
          <Text style={{ fontSize : 18 }} > 
            Xem chi tiết
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
  </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    //backgroundColor: `#A6F3B7`,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    marginTop : 0,
    width :106,
    height: 106,
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 53,
    elevation: 3,
    backgroundColor: '#CE7559',
  },
  button1: {
    alignItems: 'center',
    marginTop : 0,
    width :106,
    height: 106,
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 53,
    elevation: 3,
    backgroundColor: '#E7F688',
  },
  button3: {
    alignItems: 'center',
    marginTop : 0,
    width :106,
    height: 106,
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 53,
    elevation: 3,
    backgroundColor: '#CD89CE',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1 :{
    backgroundColor: '#ffffff',
    width :120,
    height: 285,
    marginLeft :10,
    borderRadius : 15,
    elevation: 20,
    left : 0
  },
  button2: {
    //alignItems: 'flex-end',
    alignItems: 'center',
    left:10,
    marginTop : 18,
    width : 100,
    height: 25,
    //paddingVertical: 1,
    //paddingHorizontal: 2,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: '#FED9D9',
  },
});

export default Main;
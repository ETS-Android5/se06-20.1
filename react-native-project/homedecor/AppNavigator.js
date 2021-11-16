//AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import the different screens

import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Start from './src/screens/Start';
import PickRole from './src/screens/PickRole';
import Test from './src/screens/comingsoon';
// create our app's navigation stack
const Stack = createNativeStackNavigator();
const Tab  = createBottomTabNavigator()
function AppNavigator(){
  return(
    
    <Tab.Navigator
  >
    <Tab.Screen name="Trang chu"component={Main} />
    <Tab.Screen name="Thinh hanh" component={Test} />
    <Tab.Screen name="Thong bao" component={Test} />
    <Tab.Screen name="Tai khoan" component={Test} />
    </Tab.Navigator>
  )
}
  function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chào mừng đến với jasu ❤️">
        <Stack.Screen name="Chào mừng đến với jasu ❤️" component={Start} />
        <Stack.Screen name="Đăng kí" component={SignUp} />
        <Stack.Screen name="Đăng nhập" component={Login} />
        <Stack.Screen name="Home" component={AppNavigator} />
        <Stack.Screen name="Bạn là ?" component={PickRole} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App
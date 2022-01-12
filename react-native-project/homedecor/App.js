import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import LoginProduct from './screens/LoginProduct';
import HomeStackNavigation from './components/HomeStackNavigation';
import ProductInfomation from './Products/ProductInfomation';
import infoWardrobe from './Products/InfoWardrobe'
import infoKitchenCabinets from './Products/InfoKitchenCabinet';
import infoCustomCabinets from './Products/InfoCustomCabinets';
import infoBathtub from './Products/InfoBathtub';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ header: () => null }} />
        <Stack.Screen name='LoginProduct' component={LoginProduct} options={{ header: () => null }} />
        <Stack.Screen name='HomeStackNavigation' component={HomeStackNavigation} options={{ header: () => null }} />
        <Stack.Screen name='ProductInfomation' component={ProductInfomation} options={{ header: () => null }} />
        <Stack.Screen name='infoWardrobe' component={infoWardrobe} options={{ header: () => null }} />
        <Stack.Screen name='infoKitchen' component={infoKitchenCabinets} options={{ header: () => null }} />
        <Stack.Screen name='infoCustom' component={infoCustomCabinets} options={{ header: () => null }} />
        <Stack.Screen name='infoBathtub' component={infoBathtub} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

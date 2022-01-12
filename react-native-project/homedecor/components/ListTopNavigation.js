import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProductBathtub from '../Products/ProductBathtub';
import ProductWardrobe from '../Products/ProductWardrobe';
import ProductCustom from '../Products/ProductCustom';
import ProductKitchen from '../Products/ProductKitchen';
const Top = createMaterialTopTabNavigator();
const ProductList = ({ }) => {


    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <Top.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { width: 110 },
                    tabBarStyle: { backgroundColor: 'powderblue' },
                }}
            >
                <Top.Screen name='Wardrobe' component={ProductWardrobe} />
                <Top.Screen name='Kitchen cabinets' component={ProductKitchen} />
                <Top.Screen name='Custom cabinets' component={ProductCustom} />
                <Top.Screen name='Bathtup' component={ProductBathtub} />
            </Top.Navigator>
        </View>
    )
}

export default ProductList

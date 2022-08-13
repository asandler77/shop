import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../tabs/home/Home';
import {Shop} from '../../tabs/shop/Shop';

const Tab = createBottomTabNavigator();

export const EntryPoint = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
};




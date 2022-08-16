import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EntryPoint} from '../pages/EntryPoint/EntryPoint';
import {AuthNavigator} from './AuthNavigator';
import {createStackNavigator} from '@react-navigation/stack';

export const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <>
          <RootStack.Screen name={'EntryPoint'} component={EntryPoint} />
        </>
      ) : (
        <RootStack.Screen name={'AuthNavigator'} component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

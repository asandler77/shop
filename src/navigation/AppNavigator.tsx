import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EntryPoint} from '../pages/EntryPoint/EntryPoint';
import {AuthNavigator} from './AuthNavigator';

export const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <>
          <RootStack.Group>
            <RootStack.Screen name={'EntryPoint'} component={EntryPoint} />
          </RootStack.Group>
        </>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name={'AuthNavigator'} component={AuthNavigator} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

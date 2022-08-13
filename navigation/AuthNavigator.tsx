import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from "../pages/Authentication/SignIn/SignIn";
import {SignUp} from "../pages/Authentication/SignUp/SignUp";

export const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'SignIn'} component={SignIn} />
      <AuthStack.Screen name={'SignUp'} component={SignUp} />
    </AuthStack.Navigator>
  );
};

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {appTheme} from './constants/Colors';
import {AppNavigator} from './navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer theme={appTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

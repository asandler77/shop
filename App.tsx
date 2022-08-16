import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/AppNavigator';
import {appTheme} from './src/constants/Colors';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {EntryPoint} from './src/pages/EntryPoint/EntryPoint';
import {Home} from './src/tabs/home/Home';
import {AuthNavigator} from "./src/navigation/AuthNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={appTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

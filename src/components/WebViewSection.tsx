import React from 'react';
import WebView from 'react-native-webview';
import {View} from 'react-native';

export const WebViewSection = () => {
    console.log('ssssss')
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: `https://reactnavigation.org/`}}
        style={{width: 200, height: 200, backgroundColor: 'blue'}}
      />
    </View>
  );
};

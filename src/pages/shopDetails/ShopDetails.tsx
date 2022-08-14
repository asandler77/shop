import {ImageBackground} from 'react-native';
import {MobileAndInternetButtons} from '../EntryPoint/MobileAndInternetButtons';
import React from 'react';
import {TitleSection} from '../EntryPoint/TitleSection';

export const ShopDetails = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/icons/planet.png')}
      resizeMode={'cover'}>
      <TitleSection />
      <MobileAndInternetButtons navigation={navigation} />
    </ImageBackground>
  );
};

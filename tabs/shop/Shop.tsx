import React from 'react';
import {ImageBackground} from 'react-native';
import {TitleSection} from '../../pages/EntryPoint/TitleSection';
import {MobileAndInternet} from '../../pages/EntryPoint/MobileAndInternet';

export const Shop = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/icons/planet.png')}
      resizeMode={'cover'}
    >
      <TitleSection />
      <MobileAndInternet />
    </ImageBackground>
  );
};

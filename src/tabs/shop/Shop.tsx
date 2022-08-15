import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShopDetails} from '../../pages/shopDetails/ShopDetails';
import {MobileDetails} from '../../pages/mobile/MobileDetails';

const ButtonStack = createNativeStackNavigator();

export const Shop = () => {
  return (
    <ButtonStack.Navigator>
      <ButtonStack.Screen name={'ShopDetails'} component={ShopDetails} />
      <ButtonStack.Screen name={'MobileDetails'} component={MobileDetails} />
    </ButtonStack.Navigator>
  );
};

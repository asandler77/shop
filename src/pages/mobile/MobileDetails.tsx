import {View} from 'react-native';
import React from 'react';
import {MobileSection} from '../../components/MobileSection';
import {useAppSelector} from '../../hooks/redux';

export const MobileDetails = () => {
  const {shopData, isLoading, error} = useAppSelector(state => state.shop);

  const renderMobileSection = () => {
    return shopData?.map((item, index) => {
      return <MobileSection mobileSection={item} key={index} />;
    });
  };

  return <View>{renderMobileSection()}</View>;
};

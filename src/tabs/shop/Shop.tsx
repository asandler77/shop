import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Button} from '../../components/common/Button';
import {fetchShopData} from '../../store/reducers/ActionCreators';

export const Shop = () => {
  const dispatch = useAppDispatch();
  const {shopData, isLoading, error} = useAppSelector(state => state.shop);

  console.log('shopData,,', shopData, isLoading, error);
  useEffect(() => {
    dispatch(fetchShopData());
  }, []);

  return (
    <View>
      <Text>shoooop</Text>
      {/*<Button btnLabel={'button'} onPress={onPress} />*/}
    </View>
    // <ImageBackground
    //   style={{flex: 1}}
    //   source={require('../../assets/icons/planet.png')}
    //   resizeMode={'cover'}
    // >
    //   {/*<TitleSection />*/}
    //   {/*<MobileAndInternet />*/}
    // </ImageBackground>
  );
};

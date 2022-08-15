import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {LineHeight, Spacing} from '../../constants/UiSize';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchShopData} from '../../store/reducers/ActionCreators';
import {useNavigation} from '@react-navigation/native';

export const MobileAndInternetButtons = ({navigation}) => {
  const dispatch = useAppDispatch();

  const onMobilePress = () => {
    dispatch(fetchShopData());

    navigation.navigate('MobileDetails');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onMobilePress}>
        <Text style={styles.text}>Mobile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Internet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.WHITE,
    marginHorizontal: Spacing.L,
    marginVertical: Spacing.M,
  },
  button: {
    lineHeight: LineHeight.M,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 24,
    marginHorizontal: Spacing.S,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ShopData} from '../types';
import {
  FontSize,
  LetterSpacing,
  LineHeight,
  Spacing,
} from '../constants/UiSize';

interface Props {
  mobileSection: ShopData;
}
export const MobileSection = ({mobileSection}: Props) => {
  console.log('MobileSection component.1..');

  const {phonesAndDevices} = mobileSection;
  const {description, image, title} = phonesAndDevices;
  console.log('MobileSection component...');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.image}>{image}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.XL,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    flexDirection: 'row',
    minHeight: 200,
  },
  textContainer: {
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: LineHeight['2XL'],
    fontSize: FontSize['2XL'],
    marginVertical: Spacing.M,
    letterSpacing: LetterSpacing.S,
      marginLeft: Spacing.M,
    borderWidth: 1,
  },
  description: {
    fontSize: FontSize.S,
    lineHeight: LineHeight.S,
    marginVertical: Spacing.M,
      marginLeft: Spacing.M,
    letterSpacing: LetterSpacing.S,
    borderWidth: 1,
  },
  image: {
    margin: Spacing.M,
    // minWidth: 364,
    borderWidth: 1,
  },
});

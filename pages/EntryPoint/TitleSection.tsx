import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SCREEN_HEIGHT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../../constants/UiSize';

export const TitleSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.discoverTitle}>ALEXEY</Text>
      <Text style={styles.mainTitle}>Your dreams come true</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
  },
  discoverTitle: {
    color: COLORS.WHITE,
    lineHeight: LineHeight.S,
    fontSize: FontSize.S,
    marginBottom: Spacing.S,
  },
  mainTitle: {
    color: COLORS.WHITE,
    lineHeight: LineHeight['4XL'],
    fontSize: FontSize['4XL'],
    marginBottom: Spacing.L,
    marginHorizontal: 90,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

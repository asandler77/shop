import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../../constants/UiSize';

export const MobileAndInternet = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
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
    justifyContent: 'center'
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

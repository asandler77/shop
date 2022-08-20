import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ShopData} from '../types';
import {
  FontSize,
  LetterSpacing,
  LineHeight,
  Spacing,
} from '../constants/UiSize';
import {WebViewSection} from './WebViewSection';
import WebView from 'react-native-webview';

interface Props {
  mobileSection: ShopData;
}
export const MobileSection = ({mobileSection}: Props) => {
  const {phonesAndDevices} = mobileSection;
  const {description, image, title} = phonesAndDevices;

  const onPress = () => {
    console.log('onPress')

    return <WebViewSection />;
  };

  return (
    // <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.touchable} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image
        source={require(`../assets/icons/phone.png`)}
        style={styles.image}
      />
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.XL,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    flexDirection: 'row',
    minHeight: 200,
  },
  touchable: {
    minHeight: 30,
    minWidth: 30,
    backgroundColor: 'red',
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: LineHeight['2XL'],
    fontSize: FontSize['2XL'],
    marginVertical: Spacing.M,
    letterSpacing: LetterSpacing.S,
    marginLeft: Spacing.M,
  },
  description: {
    fontSize: FontSize.S,
    lineHeight: LineHeight.S,
    marginVertical: Spacing.M,
    marginLeft: Spacing.M,
    letterSpacing: LetterSpacing.S,
  },
  image: {
    margin: Spacing.M,
    // minWidth: 364,
    width: 130,
    height: 170,
  },
});

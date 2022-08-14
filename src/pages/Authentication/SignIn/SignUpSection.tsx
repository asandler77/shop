import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontSize, LineHeight} from '../../../constants/UiSize';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../../constants/Colors';
import {FormInput} from '../../../components/form/FormInput';
import {useForm} from 'react-hook-form';
import {SignInObj} from '../types';
import {Button} from '../../../components/common/Button';

export const SignUpSection = () => {
  const {control, handleSubmit} = useForm<SignInObj>();
  const [isLoading, setIsLoading] = useState(false);
  const [signUpErrMsg, setSignUpErrMsg] = useState('');

  const onHandleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{'SignUp'}</Text>
      <FormInput
        name="email"
        control={control}
        placeholder="email"
        title="EMAIL"
        customInputStyle={styleSheet.input}
        customTitleStyle={styleSheet.inputTitle}
        rules={{required: `Email is not valid`}}
      />
      <FormInput
        name="password"
        control={control}
        placeholder="password"
        title="PASSWORD"
        customInputStyle={styleSheet.input}
        customTitleStyle={styleSheet.inputTitle}
        rules={{required: `Password is not valid`}}
      />
      <Button
        errMsg={signUpErrMsg}
        isLoading={isLoading}
        onPress={handleSubmit(onHandleSubmit)}
        btnLabel="Save"
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
    container: {
        backgroundColor: COLORS.LIGHT_GREY,
    },

    title: {
        lineHeight: LineHeight['4XL'],
        fontSize: FontSize['4XL'],
        justifyContent: 'center',
        marginVertical: LineHeight.XL,
    },
    input: {
        fontSize: FontSize.L,
        lineHeight: LineHeight.L,
        backgroundColor: COLORS.INPUT_GREY,
        marginBottom: LineHeight.XL,
    },
    inputTitle: {
        fontSize: FontSize.XL,
        lineHeight: LineHeight.XL,
        marginBottom: LineHeight.S,
    },
});

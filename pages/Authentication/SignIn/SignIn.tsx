import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SignInSection} from './SignInSection';
import {SignUpSection} from './SignUpSection';

export const SignIn = () => {
  return (
    <ScrollView>
      <SignInSection />
      <SignUpSection />
    </ScrollView>
  );
};

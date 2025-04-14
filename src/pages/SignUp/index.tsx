import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/molecules/Header';
import UploadPhoto from '../../components/molecules/UploadPhoto';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" />
      <View style={styles.content}>
        <UploadPhoto />
        <Gap height={24} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput label="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 26,
    flex: 1,
  },
});

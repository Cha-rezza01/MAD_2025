import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});

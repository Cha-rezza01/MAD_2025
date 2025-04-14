import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonProps = {
  label: string;
  color?: string;
  textColor?: string;
};

const Button = ({label, color = '#02CF8E', textColor = '#020202'}: ButtonProps) => {
  const dynamicStyles = styles(color, textColor);

  return (
    <TouchableOpacity style={dynamicStyles.button} activeOpacity={0.5}>
      <Text style={dynamicStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (color: string, textColor: string) =>
  StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: 8,
      paddingVertical: 12,
    },
    label: {
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      color: textColor,
    },
  });

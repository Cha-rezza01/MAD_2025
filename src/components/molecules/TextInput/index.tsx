import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

// Define the types for the props
interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});

// Add a newline at the end of the file

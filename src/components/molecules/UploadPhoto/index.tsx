import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UploadPhoto = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Text style={styles.text}>Add{'\n'}Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  text: {
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
});

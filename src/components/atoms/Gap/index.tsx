import React from 'react';
import { View } from 'react-native';

type GapProps = {
  height?: number;
  width?: number;
};

const Gap = ({ height, width }: GapProps) => {
  return <View style={{ height, width }} />;
};

export default Gap;

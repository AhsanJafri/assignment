import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const ProgressBar = ({width}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        width: `${width}%`,
        height: 10,
        borderRadius: 20,
        backgroundColor: 'red',
      }}
    />
  );
};

export default ProgressBar;

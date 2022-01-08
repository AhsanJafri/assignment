import React from 'react';
import {View, Text, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

const TimerFunction = ({label}) => {
  return (
    <Text style={{fontSize: height * 0.05, fontFamily: 'serif'}}>{label}</Text>
  );
};

export default TimerFunction;

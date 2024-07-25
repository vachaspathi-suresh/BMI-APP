import React from 'react';
import {View} from 'react-native';
import BMIBar from '../Components/BMIBar';

const ResultScreen = () => {
  return (
    <View>
      <BMIBar data={22} />
    </View>
  );
};

export default ResultScreen;

import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

const BMIBar = ({data}) => {
  const [bmiValue, setbmiValue] = useState(data);
  LogBox.ignoreLogs([
    ' Warning: Encountered two children with the same key, `Obese`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
  ]);

  return (
    <RNSpeedometer
      value={bmiValue}
      minValue={10.375}
      maxValue={38}
      easeDuration={1250}
      allowedDecimals={3}
      defaultValue={10.5}
      labels={[
        {
          name: 'Excessive Under Weight',
          labelColor: '#d28887',
          activeBarColor: '#d28887',
          key: 1,
        },
        {
          name: 'Excessive Under Weight',
          labelColor: '#d28887',
          activeBarColor: '#d28887',
          key: 2,
        },
        {
          name: 'Excessive Under Weight',
          labelColor: '#d28887',
          activeBarColor: '#d28887',
          key: 3,
        },

        {
          name: 'Under Weight',
          labelColor: '#ffe400',
          activeBarColor: '#ffe400',
          key: 5,
        },
        {
          name: 'Under Weight',
          labelColor: '#ffe400',
          activeBarColor: '#ffe400',
          key: 6,
        },

        {
          name: 'Normal',
          labelColor: '#018137',
          activeBarColor: '#018137',
          key: 7,
        },
        {
          name: 'Normal',
          labelColor: '#018137',
          activeBarColor: '#018137',
          key: 8,
        },
        {
          name: 'Normal',
          labelColor: '#018137',
          activeBarColor: '#018137',
          key: 9,
        },
        {
          name: 'Normal',
          labelColor: '#018137',
          activeBarColor: '#018137',
          key: 10,
        },

        {
          name: 'Over Weight',
          labelColor: '#ffe400',
          activeBarColor: '#ffe400',
          key: 11,
        },
        {
          name: 'Over Weight',
          labelColor: '#ffe400',
          activeBarColor: '#ffe400',
          key: 12,
        },
        {
          name: 'Over Weight',
          labelColor: '#ffe400',
          activeBarColor: '#ffe400',
          key: 13,
        },

        {
          name: 'Obese',
          labelColor: '#bc2021',
          activeBarColor: '#bc2021',
          key: 15,
        },
        {
          name: 'Obese',
          labelColor: '#bc2021',
          activeBarColor: '#bc2021',
          key: 16,
        },
        {
          name: 'Obese',
          labelColor: '#bc2021',
          activeBarColor: '#bc2021',
          key: 17,
        },
        {
          name: 'Obese',
          labelColor: '#bc2021',
          activeBarColor: '#bc2021',
          key: 18,
        },
        {
          name: 'Obese',
          labelColor: '#bc2021',
          activeBarColor: '#bc2021',
          key: 19,
        },
      ]}
    />
  );
};

export default BMIBar;

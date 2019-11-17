/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { eNumberGenerator } from './utils/eNumberGenerator';
import { convertToRL } from './utils/convertToRL';
import { rlMagicAddition } from './utils/rlMagicAddition';

import 'antd/dist/antd.css';
import './App.css';

const X = 320;
const initialValue = 100;

function App() {
  const eNumbers = eNumberGenerator(3, X);
  // console.log(eNumbers);

  const miserableValuesSum = eNumbers.reduce((acc, value) => (
    acc + value
  ));

  // console.log(miserableValuesSum);

  const sum = initialValue + miserableValuesSum;

  // console.log(sum);

  const difference = initialValue - miserableValuesSum;

  // console.log(difference);

  // const rlNumbers = eNumbers.map((number) => (convertToRL(`${number}`)));

  const rlNumbers = [
    '0.7.-1063.-1064.-1065.-1068.-1069.-1070.-1073',
    '0.6.-1062.-1064.-1065.-1068.-1071.-1072',
    '0.8.-1061.-1062.-1064.-1067.-1069.-1070.-1071.-1072',
  ];

  console.log(rlNumbers);

  const step1 = rlMagicAddition(rlNumbers[0], rlNumbers[1]);

  console.log('step1');
  console.log(step1);

  const step2 = rlMagicAddition(step1, rlNumbers[2]);

  console.log('step2');
  console.log(step2);

  const rlSum = rlNumbers.reduce((acc, current) => (rlMagicAddition(acc, current)));

  console.log('RL SUM');
  console.log(rlSum);


  return (
    <div className="App">
      Hello World !
    </div>
  );
}

export default App;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import RLTable from './components/Table/Table';
import { eNumberGenerator } from './utils/eNumberGenerator';
import { convertToRL } from './utils/convertToRL';
import { rlMagicAddition } from './utils/rlMagicAddition';
import { fillDataSouce } from './utils/fillDataSource';

import 'antd/dist/antd.css';
import './App.css';

const X = 320;
const initialValue = 100;

function App() {
  const [eNumbers, numberArrayValuation] = eNumberGenerator(14, X);

  const miserableValuesSum = eNumbers.reduce((acc, value) => (
    acc + value
  ));

  const sum = initialValue + miserableValuesSum;

  const difference = initialValue - miserableValuesSum;

  const rlNumbers = eNumbers.map((number) => (convertToRL(`${number}`)));

  const rlSum = rlNumbers.reduce((acc, current) => (rlMagicAddition(acc, current)));

  console.log('RL SUM');
  console.log(rlSum);

  const dataSource = fillDataSouce(eNumbers, numberArrayValuation, initialValue);


  return (
    <div className="App">
      <div>
        {`The smallest possible number 1e-${X}`}
      </div>
      <div className="initialValue">
        {`Initial value ${initialValue}`}
      </div>
      <RLTable dataSource={dataSource} />


    </div>
  );
}

export default App;

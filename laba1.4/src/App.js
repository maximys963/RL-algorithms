/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from 'antd';
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

  const eNumbersSum = eNumbers.reduce((acc, value) => (
    acc + value
  ));

  console.log('eNumbersSum');
  console.log(eNumbersSum);

  const sum = initialValue + miserableValuesSum;

  const difference = initialValue - miserableValuesSum;

  const rlNumbers = eNumbers.map((number) => (convertToRL(`${number}`)));

  const rlInitialValue = convertToRL(`${initialValue}`);

  const rlSum = rlNumbers.reduce((acc, current) => (rlMagicAddition(acc, current)));

  // console.log('RL SUM');
  // console.log(rlSum);


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
      <div className="rlContainer">
        {[rlInitialValue, ...rlNumbers].map((rlnumber) => (
          <div key={rlnumber}>
            {rlnumber}
          </div>
        ))}
      </div>
      <div className="rlContainer">
        <div>RL Sum</div>
        <div>{rlSum}</div>
      </div>
      <div className="rlContainer">
        <div>Decimal Sum</div>
        <div>{eNumbersSum}</div>
      </div>
      <div className="rlContainer">
        <div>Final Sum </div>
        <div>{rlMagicAddition(rlInitialValue, rlSum)}</div>
        <div>{initialValue + eNumbersSum}</div>
      </div>
    </div>
  );
}

export default App;

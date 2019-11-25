/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import RLTable from './components/Table/Table';
import { eNumberGenerator } from './utils/eNumberGenerator';
import { convertToRL } from './utils/convertToRL';
import { fillDataSouce } from './utils/fillDataSource';
import {rlMagicMultiplication} from "./utils/rlMagicMultiplication";

import 'antd/dist/antd.css';
import './App.css';

const X = 320;
const initialValue = 100;

function App() {
  const [eNumbers, numberArrayValuation] = eNumberGenerator(14, X);

  const miserableValuesSum = eNumbers.reduce((acc, value) => (
    acc + value
  ));

  const eNumbersMult = eNumbers.reduce((acc, value) => (
    acc * value
  ));

  console.log('eNumbersMult');
  console.log(eNumbersMult);

  // const sum = initialValue + miserableValuesSum;
  //
  // const difference = initialValue - miserableValuesSum;

  const rlNumbers = eNumbers.map((number) => (convertToRL(`${number}`)));

  const rlInitialValue = convertToRL(`${initialValue}`);

  const rlMult = rlNumbers.reduce((acc, current) => (rlMagicMultiplication(acc, current)));

  const dataSource = fillDataSouce(eNumbers, numberArrayValuation, 100);



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
        <div>RL Multiplication</div>
        <div>{rlMult}</div>
      </div>
      <div className="rlContainer">
        <div>Decimal Multiplication</div>
        <div>{eNumbersMult}</div>
      </div>
      <div className="rlContainer">
        <div>Final Multiplication </div>
        <div>{rlMagicMultiplication(rlInitialValue, rlMult)}</div>
        <div>{initialValue * eNumbersMult}</div>
      </div>
    </div>
  );
}

export default App;

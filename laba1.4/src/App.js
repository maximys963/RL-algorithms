import React                from 'react';
import { eNumberGenerator } from './utils/eNumberGenerator'
import { convertToRL }      from './utils/convertToRL';

import 'antd/dist/antd.css';
import './App.css';

const X = 320;
const initialValue = 100;

function App() {

    const eNumbers = eNumberGenerator( 14, X);
    console.log(eNumbers);

    const miserableValuesSum = eNumbers.reduce((acc, value) => (
        acc + value
    ));

    console.log(miserableValuesSum);

    const sum = initialValue + miserableValuesSum;

    console.log(sum);

    const difference = initialValue + miserableValuesSum;

    console.log(difference);

    convertToRL(20, 22);


  return (
    <div className="App">
      Hello World !

    </div>
  );
}

export default App;

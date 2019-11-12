import React                from 'react';
import { eNumberGenerator } from './utils/eNumberGenerator'

import 'antd/dist/antd.css';
import './App.css';

const X = 323;

function App() {

    const eNumbers = eNumberGenerator(100, 14, X);
    console.log(eNumbers);


  return (
    <div className="App">
      Hello World !

    </div>
  );
}

export default App;

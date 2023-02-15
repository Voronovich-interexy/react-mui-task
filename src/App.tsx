import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CharComponent from './CharComponent';
import ClassComponent from './ClassComponent';
import ClassComponent2 from './ClassComponent2';
import FunctionComponent1 from './FunctionComponent1';
import TestCb from './TestCb';

type propsType = {
  num: number;
  cl: string;
};

const numbers = [
  { num: 1, cl: 'cl1' },
  { num: 2, cl: 'cl2' },
  { num: 3, cl: 'cl3' },
  { num: 4, cl: 'cl4' },
  { num: 5, cl: 'cl5' },
];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ClassComponent numbers={numbers as Array<propsType>} />} />
      <Route path="/next" element={<ClassComponent2 numbers={numbers as Array<propsType>} />} />
      <Route path="/test" element={<TestCb />} />
      <Route path="/api" element={<FunctionComponent1 />} />
      <Route path="/api/:charId" element={<CharComponent />} />
    </Routes>
  );
};

export default App;

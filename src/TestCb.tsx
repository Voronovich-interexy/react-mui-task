import React, { useCallback, useEffect, useState } from 'react';

const TestCb = () => {
  const [message, setMessage] = useState('Hello');
  const [counter, setCounter] = useState(0);

  const greeting = useCallback((text: string) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return <button onClick={() => setCounter(counter + 1)}>I was clicked {counter} times</button>;
};

export default TestCb;

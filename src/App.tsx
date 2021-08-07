import React from 'react';
import Counter from './components/counter/counter';

const AppChild2: React.FC<{}> = (params) => {
  return (
    <>
      <h1>Hello from React component</h1>
      <React.Suspense fallback='Loading some component...'>
        <Counter></Counter>
      </React.Suspense>
    </>
  );
}

export default AppChild2;

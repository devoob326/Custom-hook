import React from 'react';
import useStorage from './Usestorage';

function App() {
  const [value, setValue] = useStorage('inputValue');

  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

export default App;
import React from 'react';
import WithoutDebounce from './components/WithoutDebounce';
import WithDebounce from './components/WithDebounce';
import './App.css';

function App() {
  return (
    <div className="App">
      <WithoutDebounce />
      <WithDebounce />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3399", "#33FF99", "#9933FF"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

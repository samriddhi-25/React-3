import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const toggleColorList = () => {
    setShowColors(!showColors);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setShowColors(false);

    // Change the background color of the entire webpage
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ColorPicker;

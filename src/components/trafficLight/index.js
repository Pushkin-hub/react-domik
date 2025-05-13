import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const changeColor = () => {
    setColor(prevColor => {
      if (prevColor === 'red') return 'green';
      if (prevColor === 'green') return 'yellow';
      return 'red';
    });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div style={{
        width: '100px',
        height: '300px',
        backgroundColor: '#333',
        borderRadius: '10px',
        position: 'relative',
        margin: 'auto'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: color === 'red' ? 'red' : '#555',
          borderRadius: '50%',
          margin: '10px auto',
        }}></div>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: color === 'yellow' ? 'yellow' : '#555',
          borderRadius: '50%',
          margin: '10px auto',
        }}></div>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: color === 'green' ? 'green' : '#555',
          borderRadius: '50%',
          margin: '10px auto',
        }}></div>
      </div>
      <button onClick={changeColor}>Сменить цвет</button>
    </div>
  );
};

export default TrafficLight;

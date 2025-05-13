import React, { useState } from 'react';

const RandomNumberGenerator = ({ min, max }) => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={generateRandomNumber}>Сгенерировать случайное число</button>
      {randomNumber !== null && <h2>{randomNumber}</h2>}
    </div>
  );
};

export default RandomNumberGenerator;

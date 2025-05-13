import React, { useState } from 'react';

const Magic8Ball = () => {
  const [answer, setAnswer] = useState('');
  const answers = [
    "Да",
    "Нет",
    "Возможно",
    "Определенно",
    "Скорее всего",
    "Спросите позже",
    "Не могу предсказать сейчас",
  ];

  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={getAnswer}>Спросить у шара</button>
      {answer && <h2>{answer}</h2>}
    </div>
  );
};

export default Magic8Ball;

import React from 'react';
import ButtonsInput from './ButtonsInput';

const CalculatorBody = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <ButtonsInput buttons={buttons} onButtonClick={onButtonClick} />
  );
};

export default CalculatorBody;

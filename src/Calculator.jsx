import React, { useState } from 'react';
import CalculatorBody from './CalculatorBody';
import Inputs from './Inputs';

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (button) => {
    if (button === "=") {
      try {
        const result = eval(expression);
        setExpression(String(result));
      } catch {
        setExpression("Error");
      }
    } else if (button === "C") {
      setExpression("");
    } else {
      setExpression(prev => prev + button);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 to-amber-300">
      <div className="p-6 space-y-4 bg-white rounded-lg shadow-2xl w-80">
        <Inputs value={expression} />
        <CalculatorBody onButtonClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

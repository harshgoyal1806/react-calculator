import React from 'react';

const ButtonsInput = ({ buttons, onButtonClick }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((but, index) => {
        const baseStyle =
          "py-3 text-lg font-semibold rounded shadow transition-all";

        const className = 
          but === "="
            ? `bg-green-500 hover:bg-green-600 text-white ${baseStyle} col-span-1`
            : but === "C"
            ? `bg-red-500 hover:bg-red-600 text-white ${baseStyle}`
            : `bg-blue-500 hover:bg-blue-600 text-white ${baseStyle}`;

        return (
          <button 
            key={index}
            onClick={() => onButtonClick(but)}
            className={className}
          >
            {but}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsInput;

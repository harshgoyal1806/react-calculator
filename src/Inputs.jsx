import React from 'react';

const Inputs = ({ value }) => {
  return (
    <input 
      type="text" 
      placeholder="0" 
      value={value} 
      readOnly 
      className="w-full p-4 font-mono text-3xl text-right bg-gray-100 border border-gray-300 rounded shadow-inner"
    />
  );
};

export default Inputs;

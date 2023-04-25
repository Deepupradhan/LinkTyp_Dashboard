import React, { useState } from 'react';

export default function Test() {
  const [cardRadius, setCardRadius] = useState(40);
  const [cardBorder, setCardBorder] = useState(40);

  const handleCardRadiusChange = (e:any) => {
    const valueInPixels = e.target.value + 'px';
    setCardRadius(e.target.value);
    console.log(`Card radius: ${valueInPixels}`);
  };

  const handleCardBorderChange = (e:any) => {
    const valueInPixels = e.target.value + 'px';
    setCardBorder(e.target.value);
    console.log(`Card border: ${valueInPixels}`);
  };

  return (
    <div className="flex flex-col items-center justify-around px-10 pb-10 w-full">
      <div className="md:w-1/2 px-3 w-full">
        <h1 className="text-sm font-mono pb-3 font-bold">Card Radius</h1>
        <input
          type="range"
          min="0"
          max="100"
          value={cardRadius}
          className="range range-sm range-info"
          onChange={handleCardRadiusChange}
        />
      </div>
      <div className="md:w-1/2 px-3 w-full">
        <h1 className="text-sm font-mono pb-3 font-bold">Card Border </h1>
        <input
          type="range"
          min="0"
          max="100"
          value={cardBorder}
          className="range range-sm range-info"
          onChange={handleCardBorderChange}
        />
      </div>
    </div>
  );
}

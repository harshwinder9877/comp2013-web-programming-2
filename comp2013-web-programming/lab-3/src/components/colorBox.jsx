import React, { useState } from "react";

export default function ColorBox({ color, palette }) {
  const [boxColor, setBoxColor] = useState(color);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * palette.length);
    setBoxColor(palette[randomIndex]);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: boxColor,
        width: "50px",     
        height: "50px",
        cursor: "pointer",
        border: "none",
      }}
    ></div>
  );
}

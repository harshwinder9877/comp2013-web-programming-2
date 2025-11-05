import React from "react";
import ColorBox from "./colorBox";

export default function ColorBoxesContainer({ colors }) {
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const boxes = Array.from({ length: 25 }, () => getRandomColor());

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", 
        padding: "5px",            
        width: "fit-content",
        margin: "50px auto",      
      }}
    >
      {boxes.map((color, i) => (
        <ColorBox key={i} color={color} palette={colors} />
      ))}
    </div>
  );
}

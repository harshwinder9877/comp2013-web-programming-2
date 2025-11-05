import React from "react";
import colors from "./data/data";
import ColorBoxesContainer from "./components/colorBoxesContainer";

// Main App component
function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Lab 3</h1>
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}

export default App;

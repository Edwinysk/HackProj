import React from "react";
import skylineImage from "../asset/walking.png";

function Skyline() {
  return (
    <div style={{ textAlign: "center"}}>
      <img src={skylineImage} alt="Leaf" style={{ width: "100%", maxWidth: "1300px", height: "auto" }} />
    </div>
  );
}

export default Skyline;

import React from "react";

function progressTagTest() {
  return (
    <div>
      <meter
        min="0"
        max="100"
        low="20"
        high="65"
        optimum="70"
        value="30"
      ></meter>
    </div>
  );
}

export default progressTagTest;

import React from "react";

function datalistTest() {
  return (
    <>
      <div>
        <label htmlFor="exercise">What is your favorite exercise?</label>
        <input type="text" list="exercise-options" />
        <datalist id="exercise-options">
          <option value="Soccer" />
          <option value="Football" />
          <option value="Baseball" />
          <option value="Running" />
          <option value="Swimming" />
          <option value="Jumping Rope" />
        </datalist>
      </div>
    </>
  );
}

export default datalistTest;

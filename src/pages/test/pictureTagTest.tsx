import React from "react";

function pictureTagTest() {
  return (
    <div>
      <picture>
        <source media="(min-width: 700px)" srcSet="/banner.jpg" />
        <source media="(min-width: 400px)" srcSet="/gift.jpg" />
        <img src="/trophy.jpg" alt="3" />
      </picture>
    </div>
  );
}

export default pictureTagTest;

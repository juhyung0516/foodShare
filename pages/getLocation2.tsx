import React, { useEffect } from "react";

function getLocation2() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
  });
  return <div>getLocation2</div>;
}

export default getLocation2;

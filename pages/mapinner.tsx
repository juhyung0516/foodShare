import React from "react";

function mapinner() {
  let container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  let map = new kakao.maps.Map(container, options);
  return <div></div>;
}

export default mapinner;

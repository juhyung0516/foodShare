import type { NextPage } from "next";
import React, { FC, useState, useEffect } from "react";

const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d70e530d46961dc4ef6c04a5c4e8a588`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    kakao.maps.load(() => {
      let container = document.getElementById("map");
      let options = {
        center: new kakao()?.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      let map = new kakao()?.maps.Map(container, options);
    });
  }, [mapLoaded]);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "500px" }}></div>;
    </>
  );
};

export default Map;

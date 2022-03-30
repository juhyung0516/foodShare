import Box from "@mui/material/Box";
import React, { useEffect } from "react";
// import styled from "@emotion/styled";

declare global {
  interface Window {
    kakao: any;
  }
}
interface MapProps {
  latitude: number;
  longitude: number;
}

// const MapContainer = styled.div`
//     width: 100%;
//     height:100%;
// `

function kakaomap3({ latitude, longitude }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.type = "text/javascript";
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d70e530d46961dc4ef6c04a5c4e8a588&autoload=false`;
    // 헤더에 스크립트 파일을 삽입
    document.head.appendChild(mapScript);

    const onLoadMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };
    mapScript.addEventListener("load", onLoadMap);

    return () => mapScript.removeEventListener("load", onLoadMap);
  }, [latitude, longitude]);

  return (
    <>
      <div>
        <Box id="map" sx={{ width: 400, height: 400 }}></Box>
      </div>
    </>
  );
}

export default kakaomap3;

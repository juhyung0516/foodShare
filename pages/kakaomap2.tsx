import Box from "@mui/material/Box";
import React, { useEffect } from "react";

// 카카오 오류가 안 뜨게 인터페이스 선언
declare global {
  interface Window {
    kakao: any;
  }
}
// 위도 및 경도 인터페이스
interface MapProps {
  latitude: number;
  longitude: number;
}

function kakaomap3({ latitude, longitude }: MapProps) {
  // 지도 앱이 next.js ssr 규칙을 따르지 않아 useEffect 사용
  useEffect(() => {
    // script와 appkey 사용
    const mapScript = document.createElement("script");
    mapScript.type = "text/javascript";
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a577bd6009615c8635b23046f160a460&autoload=false&libraries=services,clusterer`;

    // 헤더에 스크립트 파일을 삽입
    document.head.appendChild(mapScript);

    //
    const onLoadMap = () => {
      window.kakao.maps.load(() => {
        // 지도를 표시할 div
        const container = document.getElementById("map");
        const options = {
          //  지도의 중심좌표 및 기본확대수준
          center: new window.kakao.maps.LatLng(35.9607332, 126.7189886),
          level: 3,
        };
        // div와 옵션으로 지도 생성
        const map = new window.kakao.maps.Map(container, options);
      });
    };

    mapScript.addEventListener("load", onLoadMap);

    return () => mapScript.removeEventListener("load", onLoadMap);
  }, [latitude, longitude]);

  // 지도를 담을 영역
  return (
    <>
      <div>
        <Box id="map" sx={{ width: 600, height: 600 }}></Box>
      </div>
    </>
  );
}

export default kakaomap3;

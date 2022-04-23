import Box from "@mui/material/Box";
import React, { useEffect, MouseEvent } from "react";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      //You have your locaton here
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

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
        // 스카이뷰 전환 타입 컨트롤 추가
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        //
        const markerPosition = new window.kakao.maps.LatLng(
          35.9607332,
          126.7189886
        );
        // 지도를 클릭한 위치에 표출할 마커
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        // 지도에 마커 표시
        marker.setMap(map);
        marker.setDraggable(true);
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
        // 마커 클릭 이벤트 추가
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            var latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            addMarker(mouseEvent.latLng);
          }
        );
        // 마커 객체를 가질 배열
        const markers: any[] = [];

        // 마커를 생성 및 지속 표시, 삭제
        function addMarker(position: string) {
          // 마커를 생성합니다
          let marker = new window.kakao.maps.Marker({
            position: position,
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);

          // 생성된 마커를 배열에 추가합니다
          markers.push(marker);
        }

        // 줌 컨트롤 생성
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 교통정보 지도타입 추가
        map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);
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
      {/* <p>
        <button id="clickLatlng">교통정보 보기</button>
      </p> */}
    </>
  );
}

export default kakaomap3;

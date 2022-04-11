import styled from "@emotion/styled";
import { useEffect } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

function Map({ latitude, longitude }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d70e530d46961dc4ef6c04a5c4e8a588&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      // 카카오맵을 로드
      window.kakao.maps.load(() => {
        // ID 맵에 따라 담을 그릇을 만든다
        const container = document.getElementById("map");
        // 옵션들을 만든다(위도, 경도에 따라)
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        //
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return <MapContainer id="map" />;
}

const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;

export default Map;

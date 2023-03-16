import React, { useState, useEffect } from "react";

export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild(script);
    // console.log(script);
    // console.log(process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    kakao.maps.load(() => {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(37.468789256455366, 126.89573518446782),
        level: 3,
      };

      let map = new kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(
        37.468789256455366,
        126.89573518446782
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });
      marker.setMap(map);

      let iwContent =
          '<div style="width:150px; padding:5px; text-align:center; font-size:14px;"><a href="https://map.kakao.com/link/map/지에스렌터카,37.468789256455366, 126.89573518446782" target="_blank" rel="noreferrer"">지에스렌터카</a></div>',
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    });
  }, [mapLoaded]);

  return (
    <>
      <div className="w-full h-full block mx-auto">
        <div
          id="map"
          className="md:max-w-[1080px] md:h-[450px] h-[300px] border border-[#dfdfdf] mx-5"
        ></div>
      </div>
      {/* <br><a href="https://map.kakao.com/link/map/지에스렌터카,37.468789256455366, 126.89573518446782" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/현대지식산업센터,37.468789256455366, 126.89573518446782" style="color:blue" target="_blank">길찾기</a> */}
    </>
  );
}

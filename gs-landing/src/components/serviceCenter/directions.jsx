import React from "react";
import Map from "../map";

export default function Directions() {
  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner05.jpg)] bg-no-repeat bg-center bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 고객센터 &gt; 이용안내</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] ">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-red-500 pb-4">▼</p>
                <p className="italic text-red-500 sm:text-4xl text-2xl font-medium mb-8">
                  지에스렌터카
                </p>
              </div>
              <div>
                <Map />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-90 text-white">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="max-w-full h-full md:mb-16 mb-8 lg:mx-0 mx-5">
                <p className="lg:text-xl md:text-lg text-base py-5 border-b mb-5 font-semibold">
                  주소
                </p>
                <span className="lg:text-lg md:text-base text-sm">
                  (08584)서울특별시 금천구 두산로 70, 현대지식산업센터 A동
                  1512호(지번: 독산동 291-1)
                </span>
              </div>
              <div className="max-w-full h-full flex items-start justify-between flex-wrap lg:mx-0 mx-5">
                <div className="md:w-[49%] w-full">
                  <p className="lg:text-xl md:text-lg text-base py-5 border-b mb-5 font-semibold">
                    지하철이용시
                  </p>
                  <p className="mb-5 lg:text-lg md:text-base text-sm">
                    1호선 독산역 1번 출구에서 도보 13분 소요 2호선
                  </p>
                  <p className="lg:text-lg md:text-base text-sm">
                    구로디지털단지 1번 출구에서 51, 5617, 5627, 6635 승차 후
                    금천우체국 정류장 하차
                  </p>
                </div>
                <div className="md:w-[49%] w-full">
                  <p className="lg:text-xl md:text-lg text-base py-5 border-b mb-5 font-semibold">
                    버스이용시
                  </p>
                  <ul className="lg:text-lg md:text-base text-sm">
                    <li>간선버스 : 150, 500, 505, N65(심야)</li>
                    <li>
                      <span className="inline-block h-10 float-left">
                        지선버스 :
                      </span>
                      <span className="inline">
                        &nbsp;5530, 5531, 5534, 5535, 5537, 5617, 5618, 5623,
                        &nbsp;5624, 5625, 5626, 5630, 5713, 6635
                      </span>
                    </li>
                    <li>일반버스 : 1, 5, 9-3, 51, 388, 900, 5602</li>
                    <li>직행버스 : 5609</li>
                    <li>마을버스 : 금천 08</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

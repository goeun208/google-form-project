import React from "react";
import Image from "next/image";

export default function InformationUse() {
  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner03.jpg)] bg-no-repeat bg-center bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 사고대차 &gt; 이용안내</p>
          </div>
        </section>
        <section>
          <div className="relative w-full h-[530px]">
            <Image
              src="/images/sub/03/sub03_01.jpg"
              alt="사고대차"
              layout="fill"
              objectFit="cover"
              priority="true"
            />
            <div className="absolute w-full top-[55px] bg-red-500 h-[420px] py-12 px-14 bg-[url(/images/sub/bg_pattern_red.gif)] bg-repeat bg-center xl:right-96 xl:translate-x-0 lg:right-2/4 lg:translate-x-1/2 md:right-2/4 md:translate-x-1/2 sm:right-2/4 sm:translate-x-1/2 md:w-[650px] sm:w-[650px]">
              <p className="text-[#fedc85] italic md:text-4xl sm:text-2xl text-[1.2rem] mb-5 font-medium">
                24시 사고대차란?
              </p>
              <p className="md:text-xl sm:text-[1rem] text-[0.8rem] text-white mb-12">
                상대방의 과실에 의한 사고로 차량이 파손되었을 경우, 파손된
                <br />
                차량을 수리받는 기간동안 가해차량의 보험회사로부터 대여료를
                <br />
                보증받아 렌터카를 이용하는 것을 말합니다.
              </p>
              <p className="text-[#fedc85] italic md:text-2xl sm:text-xl text-[1rem] mb-5">
                예상치 못한 사고 발생 !
              </p>
              <p className="md:text-xl sm:text-[1rem] text-[0.8rem] text-white sm:mb-12">
                사고 피해시 접수번호 받으시고 차량 입고 날짜 정하셔서 연락
                <br />
                주시면 최고의 서비스로 모시겠습니다.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:pt-[95px] lg:pb-[155px] pt-[50px] pb-[100px] box-border mx-auto">
            <div className="text-center">
              <p className="text-red-500 pb-4">▼</p>
              <p className="italic text-red-500 sm:text-4xl text-2xl font-medium">
                대여료의 처리
              </p>
            </div>
            <div className="md:my-28 my-14">
              <ul className="flex items-center flex-col lg:flex lg:items-center lg:justify-center lg:flex-row md:flex-wrap md:flex-row">
                <li className="text-center w-60 text-lg px-16 py-20 bg-[url(/images/sub/03/sub03_02.png)] bg-no-repeat bg-center">
                  가해자의
                  <br /> 보험사 지불
                </li>
                <li className="relative mx-5 my-5 w-10 h-10">
                  <Image
                    src="/images/sub/ico_plus.gif"
                    alt="plus"
                    layout="fill"
                  />
                </li>
                <li className="text-center w-60 text-lg px-16 py-20 bg-[url(/images/sub/03/sub03_03.png)] bg-no-repeat bg-center">
                  별도의 대여료
                  <br /> 결제 필요 없음
                </li>
                <li className="relative mx-5 my-5 w-10 h-10">
                  <Image
                    src="/images/sub/ico_plus.gif"
                    alt="plus"
                    layout="fill"
                  />
                </li>
                <li className="text-center w-60 text-lg px-16 py-20 bg-[url(/images/sub/03/sub03_04.png)] bg-no-repeat bg-center">
                  고객님의 과실
                  <br /> 30% 이하
                </li>
                <li className="relative mx-5 my-5 w-10 h-10">
                  <Image
                    src="/images/sub/ico_plus.gif"
                    alt="plus"
                    layout="fill"
                  />
                </li>
                <li className="text-center w-60 text-lg px-16 py-20 bg-[url(/images/sub/03/sub03_05.png)] bg-no-repeat bg-center">
                  별도의 추가
                  <br /> 요금청구 없음
                </li>
              </ul>
            </div>
            <div className="text-center text-sm lg:text-xl md:text-base">
              <span className="leading-10">
                사고대차의 경우 대여료는 상대방 보험사에서 지불되기 때문에
                별도의 대여료 결제는 필요없습니다.
                <br />
                지에스렌터카에서는
                <span className="text-red-500">
                  &nbsp;고객님의 과실이 최대 30%를 넘지 않는다면&nbsp;
                </span>
                고객님께 별도의 추가 요금청구 없이
                <br />
                대차가 가능하니 문의주시면 차량의 사고 수리 기간 동안 렌터카
                이용이 가능합니다.
              </span>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

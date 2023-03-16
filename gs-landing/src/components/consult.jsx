import React from "react";
import Image from "next/image";

export default function Consult() {
  return (
    <>
      <section>
        <div className="lg:pt-[95px] lg:pb-[155px] pt-[50px] pb-[100px] box-border mx-auto bg-[url(/images/sub/bg_pattern_brown.gif)] bg-repeat bg-center">
          <div className="text-center">
            <p className="text-[#fedc85] pb-4">▼</p>
            <p className="italic text-[#fedc85] sm:text-4xl text-2xl font-medium">
              24시 언제 어디서나
              <br />
              친절하게 상담해드립니다.
            </p>
            <p className="text-white sm:text-2xl text-xl pt-5 pb-20">
              부담없이 연락주세요!
            </p>
          </div>
          <div className="flex items-center max-w-full max-h-full lg:flex-nowrap flex-wrap justify-center">
            <div className="relative w-[507px] h-44 md:h-60 sm:h-60 mr-0 mb-4 lg:mb-0 lg:mr-[10px]">
              <Image
                src="/images/banner_consult_01.jpg"
                alt="상담 및 문의 전화 : 1522-2686 / 010-4059-1599"
                layout="fill"
                priority="true"
              />
            </div>
            <div className="relative w-[507px] h-44 md:h-60 sm:h-60">
              <Image
                src="/images/banner_consult_02.jpg"
                alt="카카오톡 친구추가 : 01rentcar"
                layout="fill"
                priority="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

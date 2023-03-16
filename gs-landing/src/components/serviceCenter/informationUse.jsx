import React from "react";
import Image from "next/image";

export default function InformationUse() {
  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner05.jpg)] bg-no-repeat bg-cover bg-center">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 고객센터 &gt; 이용안내</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px]">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-red-500 pb-4">▼</p>
                <p className="italic text-red-500 sm:text-4xl text-2xl font-medium mb-8">
                  예약안내
                </p>
                <p className="mb-8">&#183;예약방법 및 절차</p>
              </div>
              <div>
                <ul className="w-[95%] h-full flex items-center flex-col lg:flex lg:items-center lg:justify-center lg:flex-row md:flex-wrap md:flex-row mx-auto">
                  <li className="text-center w-52 text-base px-10 py-16 bg-[url(/images/sub/05/sub05_01_01.png)] bg-no-repeat bg-center">
                    STEP.01
                    <br />
                    홈페이지에서
                    <br />
                    대여하고 싶은 차량 선택
                  </li>
                  <li className="relative mx-5 my-5 w-[42px] h-[29px] md:rotate-0 rotate-90">
                    <Image
                      src="/images/sub/ico_arrow.gif"
                      alt="plus"
                      layout="fill"
                    />
                  </li>
                  <li className="text-center w-52 text-base px-10 py-20 bg-[url(/images/sub/05/sub05_01_02.png)] bg-no-repeat bg-center">
                    STEP.02
                    <br />
                    전화 문의
                  </li>
                  <li className="relative mx-5 my-5 w-[42px] h-[29px] md:rotate-0 rotate-90">
                    <Image
                      src="/images/sub/ico_arrow.gif"
                      alt="plus"
                      layout="fill"
                    />
                  </li>
                  <li className="text-center w-52 text-base px-10 py-20 bg-[url(/images/sub/05/sub05_01_03.png)] bg-no-repeat bg-center">
                    STEP.03
                    <br />
                    재고 확인 후<br />
                    예약이나 계약
                  </li>
                  <li className="relative mx-5 my-5 w-[42px] h-[29px] md:rotate-0 rotate-90">
                    <Image
                      src="/images/sub/ico_arrow.gif"
                      alt="plus"
                      layout="fill"
                    />
                  </li>
                  <li className="text-center w-52 text-base px-10 py-20 bg-[url(/images/sub/05/sub05_01_04.png)] bg-no-repeat bg-center">
                    STEP.04
                    <br />
                    계약서 작성
                  </li>
                  <li className="relative mx-5 my-5 w-[42px] h-[29px] md:rotate-0 rotate-90">
                    <Image
                      src="/images/sub/ico_arrow.gif"
                      alt="plus"
                      layout="fill"
                    />
                  </li>
                  <li className="text-center w-52 text-base px-10 py-20 bg-[url(/images/sub/05/sub05_01_05.png)] bg-no-repeat bg-center">
                    STEP.05
                    <br />
                    차량 인계
                  </li>
                  <li className="relative mx-5 my-5 w-[42px] h-[29px] md:rotate-0 rotate-90">
                    <Image
                      src="/images/sub/ico_arrow.gif"
                      alt="plus"
                      layout="fill"
                    />
                  </li>
                  <li className="text-center w-52 text-base px-10 py-20 bg-[url(/images/sub/05/sub05_01_06.png)] bg-no-repeat bg-center">
                    STEP.06
                    <br />
                    연장 혹은 반납시
                    <br />
                    담당자에게 연락
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] bg-[url(/images/sub/05/sub05_01_07.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-white pb-4">▼</p>
                <p className="italic text-white sm:text-4xl text-2xl font-medium mb-16">
                  대여안내
                </p>
              </div>
              <div>
                <p className="mb-5 text-white text-xl font-medium">
                  - 대여자격
                </p>
                <span className="block mb-7 text-white">
                  도로교통법상 유효한 운전면허증 소유자
                </span>
                <table className="text-center w-full h-full mb-12 lg:text-base md:text-sm text-xs">
                  <tbody>
                    <tr className="text-white bg-[rgba(177,39,37,0.7)] h-[70px] border-b border-[#b44d47]">
                      <th className="w-[33%]">구분</th>
                      <th className="w-[33%] border-x border-[#b44d47]">
                        연령
                      </th>
                      <th className="w-[33%]">면혀증/운전경력</th>
                    </tr>
                    <tr className="h-[70px] bg-[rgba(255,255,255,0.8)] border-b border-[#b9b9b9]">
                      <td>승용차, 9인승 이하</td>
                      <td className="border-x border-[#b9b9b9]">
                        만 21세 이상
                      </td>
                      <td>2종 보통면허 이상, 운전 경력 1년 이상</td>
                    </tr>
                    <tr className="h-[70px] bg-[rgba(255,255,255,0.8)]">
                      <td>11인승 이상</td>
                      <td className="border-x border-[#b9b9b9]">
                        만 26세 이상
                      </td>
                      <td>1종 보통면허 이상, 운전 경력 3년 이상</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="text-white mb-20 lg:text-base md:text-sm text-xs">
                  <li className="mb-4 pl-3 block relative before:content-['*'] before:absolute before:top-1 before:-left-0 before:block before:text-[#f0433a]">
                    대여자격 기준에 적합하지 않은 면허증을 소지하신 경우 대여가
                    취소 될 수 있으니 이점 유념하여 주시기 바랍니다.
                  </li>
                  <li className="mb-4 pl-3 block relative before:content-['*'] before:absolute before:top-1 before:-left-0 before:block before:text-[#f0433a]">
                    대여 당일 운전면허증 미 지참 시 차량 대여가 불가하오니, 꼭
                    지참 후 방문부탁드립니다.
                  </li>
                  <li className="pl-3 block relative before:content-['*'] before:absolute before:top-1 before:-left-0 before:block before:text-[#f0433a]">
                    외국인의 경우, 국제운전면허증(B등급이상) 소지자에 한해 9인승
                    이하 차량만 대여 가능합니다. (지점 동행방문시 가능)
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-5 text-white text-xl font-medium">
                  - 렌터카 이용시 유의사항
                </p>
                <ul className="w-full h-full flex items-center justify-center flex-wrap text-center mb-20">
                  <li className="w-[220px] h-[220px] bg-[url(/images/sub/05/sub05_01_08.png)] bg-no-repeat bg-center px-10 pt-36 mx-5 sm:my-0 my-4">
                    실내금연
                  </li>
                  <li className="w-[220px] h-[220px] bg-[url(/images/sub/05/sub05_01_09.png)] bg-no-repeat bg-center px-10 pt-36 mx-5 sm:my-0 my-4">
                    음주운전 금지
                  </li>
                  <li className="w-[220px] h-[220px] bg-[url(/images/sub/05/sub05_01_10.png)] bg-no-repeat bg-center px-10 pt-36 mx-5 sm:my-0 my-4">
                    안전벨트 필수
                  </li>
                  <li className="w-[220px] h-[220px] bg-[url(/images/sub/05/sub05_01_11.png)] bg-no-repeat bg-center px-10 pt-36 mx-5 sm:my-0 my-4">
                    애완동물 동반탑승
                    <br />
                    금지
                  </li>
                </ul>
              </div>
              <p className="mb-5 text-white text-xl">- 제2 운전자 현장등록</p>
              <span className="block mb-7 text-white">
                <span className="lg:text-base md:text-sm text-xs">
                  사전에 제2운전자 추가를 못하신 경우, 대여 당일 면허증 소지 후
                  예약자와 제2운전자가 지점에 함께 방문하시면 별도 추가 비용
                  없이 등록 가능합니다.
                </span>
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] bg-[url(/images/sub/05/sub05_01_12.jpg)] bg-no-repeat bg-center">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-red-500 pb-4">▼</p>
                <p className="italic text-red-500 sm:text-4xl text-2xl font-medium mb-16">
                  보험보상 / 사고처리
                </p>
              </div>
              <div>
                <p className="mb-5 text-xl font-medium">
                  - 대여 중 사고 시 보상범위
                </p>
                <span className="block mb-7">
                  도로교통법상 유효한 운전면허증 소유자
                </span>
                <table className="text-center w-full h-full mb-20 md:text-base sm:text-sm text-xs">
                  <tbody>
                    <tr className="w-full h-[70px] border-b border-[#b9b9b9]">
                      <th className="bg-[rgba(177,39,37,0.85)] border-b border-[#d65d5b] w-[25%] text-white">
                        대인
                      </th>
                      <td className="w-[25%] bg-white">무한</td>
                      <th className="bg-[rgba(177,39,37,0.85)] border-b border-[#d65d5b] w-[25%] text-white">
                        대물
                      </th>
                      <td className="w-[25%] bg-white">
                        사고 건당 2천만원 한도
                      </td>
                    </tr>
                    <tr className="w-full h-[100px]">
                      <th className="bg-[rgba(177,39,37,0.85)] text-white">
                        자손
                      </th>
                      <td className="bg-white px-5 text-left" colSpan={3}>
                        인당 1천 5백만 원 한도 / 사고 건당 1억 5천만 원 한도
                        계약서 상 등록되지 않은 운전자는 종합보험혜택을
                        <br />
                        받으실 수 없습니다.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-5 text-xl font-medium">- 사고처리</p>
                <span className="block mb-7 lg:text-base md:text-sm text-xs">
                  사용 예약을 위해 고객님께서는 사전에 아래의 준비 사항을 준비해
                  주세요.
                </span>
                <ul className="w-full h-full flex items-center justify-center flex-wrap text-center mb-12">
                  <li className="w-[320px] h-[180px] leading-[200%] bg-white border-4 border-[#e8443d] py-12 mx-5 lg:my-0 my-3 text-xl">
                    <strong className="text-[#e8443d]">ONE STOP</strong>
                    <br />
                    서비스
                  </li>
                  <li className="w-[320px] h-[180px] leading-[180%] bg-white border-4 border-[#c9283e] py-12 mx-5 lg:my-0 my-3 text-xl">
                    사고처리 접수
                    <br />
                    <strong className="text-[#e8443d] text-4xl">
                      1522-2686
                    </strong>
                  </li>
                  <li className="w-[320px] h-[180px] leading-[200%] bg-white border-4 border-[#820333] py-12 mx-5 lg:my-0 my-3 text-xl">
                    <strong className="text-[#820333]">긴급출동</strong>
                    <br />
                    서비스
                  </li>
                </ul>
                <ul className="lg:text-base md:text-sm text-xs">
                  <li className="mb-4 pl-3 block relative before:content-['*'] before:absolute before:top-1 before:-left-0 before:block before:text-[#f0433a]">
                    예기치 못한 사고 발생! 당황하지 마세요.
                    <br />
                    사고 발생 시 고객님의 안전과 신속한 처리를 위해 사고처리
                    전문가가 상담해드립니다.
                  </li>
                  <li className="mb-4 pl-3 block relative before:content-['*'] before:absolute before:top-1 before:-left-0 before:block before:text-[#f0433a]">
                    단 교통법규 위반, 음주운전 등으로 인한 사고 발생 시 보상의
                    범위가 좁혀질 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

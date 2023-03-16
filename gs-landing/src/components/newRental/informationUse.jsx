import React from "react";

const features = [
  { name: "이용가능차량", text: "15인승 이하 모든 차량 (LPG 차량 포함)" },
  { name: "차량번호판", text: "허, 하, 호 (영업용 번호판)" },
  { name: "운행거리", text: "거리 제한 없음" },
  {
    name: "차량관리",
    text: "주행 거리에 따른 모든 소모품 정비 가능, 차량 관련 모든 업무 대행",
  },
  { name: "경제성", text: "LPG 차량 이용 시 연료비 절감" },
  { name: "비용처리(손해비용)", text: "렌트료 전액" },
  { name: "보험료", text: "렌트료에 포함" },
  {
    name: "보험요율",
    text: "보험 접수 및 사고 처리 이용자의 경우, 사고 시 면책금 부담으로 모든 처리 가능",
  },
  { name: "보험료할증(사고시)", text: "변동 없음" },
  { name: "유지보수비용", text: "렌트사 책임" },
  { name: "대차서비스", text: "지원(서비스 선택 시)" },
  { name: "정비서비스", text: "방문 서비스" },
  { name: "자동차세금", text: "렌트료 포함" },
  { name: "10부제, 홀짝제", text: "제외" },
  { name: "대출한도, 자산인식", text: "인식 안 됨" },
  { name: "벌칙금, 과태료부과", text: "렌트사 별로 다름(가능한 렌트사 존재)" },
];

export default function InformationUse() {
  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner04.jpg)] bg-no-repeat bg-center bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 신차장기렌트 &gt; 이용안내</p>
          </div>
        </section>
        <section>
          <div className="w-full lg:h-[1300px] bg-[url(/images/sub/04/sub04_01.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="max-w-[1080px] h-full box-border mx-auto pt-[55px]">
              <div className="w-full h-ful bg-red-500 py-12 px-14 bg-[url(/images/sub/bg_pattern_red.gif)] bg-repeat bg-center text-center mb-[55px]">
                <p className="text-[#fedc85] italic md:text-4xl sm:text-2xl text-[1.2rem] mb-5  font-medium">
                  장기렌터카란?
                </p>
                <p className="md:text-xl sm:text-[1rem] text-[0.8rem] text-white text-center">
                  월 렌트료 하나로, 차량 유지비용(세금, 보험, 정비)이 별도로
                  들지 않습니다. <br />
                  모든 차량관리 업무(차량 운용방법, 사고처리 등)을 대행하여
                  편리하게 차량을 이용하실 수 있습니다
                </p>
              </div>
              <div className="w-full flex items-center justify-between flex-wrap flex-row">
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#f0433a] text-2xl text-white font-medium leading-[70px]">
                    정기적인 자동차관리
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    차량 정비상품을 별도로 추가가 가능하여
                    <br />
                    직접 자동차관리를 하지 않더라도 손쉽게
                    <br />
                    정비를 받을 수 있습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#820333] text-2xl text-white font-medium leading-[70px]">
                    초기비용 최소화
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    장기렌트의 경우, 렌트료 안에 취등록세,
                    <br />
                    자동차보험료가 ​모두 포함되어 있어서
                    <br />
                    자동차세, 할부이자 등의 초기비용이
                    <br />
                    발생되지 않습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#f0433a] text-2xl text-white font-medium leading-[70px]">
                    사고가 나도 안심
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    일반 개인보험의 경우, 사고가 나면 보험료가
                    <br />
                    할증되어 보험료가 오르지만 렌터카는
                    <br />
                    기업보험으로 되어 있어서 사고가 나더라도
                    <br />
                    보험료 할증이 없다는 장점이 있습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#820333] text-2xl text-white font-medium leading-[70px]">
                    비용처리
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    업무 목적으로 차량을 장기렌트로 이용할
                    <br />
                    경우에는 경비처리를 통해 절세혜택 효과를
                    <br />
                    얻을 수 있습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#f0433a] text-2xl text-white font-medium leading-[70px]">
                    회계처리 간소화
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    ​매월 정해진 렌트료만 손비처리 하기 때문에
                    <br />
                    회계처리가 간편합니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#820333] text-2xl text-white font-medium leading-[70px]">
                    저렴한 보험료
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    렌터카사의 보험요율을 적용하여 평소
                    <br />
                    보험료가 ​많이 나오거나 나이가 어린 고객의
                    <br />
                    경우 보험료를 최소화 할 수 있습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#f0433a] text-2xl text-white font-medium leading-[70px]">
                    유류비 절감가능
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    일반인은 LPG 차량을 구매할 수 없지만
                    <br />
                    장기렌트카는 영업용 차량으로 LPG 차량을
                    <br />
                    구매해 대여할 수 있어서 일반인도 LPG 차량
                    <br />
                    이용이 가능합니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#820333] text-2xl text-white font-medium leading-[70px]">
                    만기선택 자유
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    ​장기렌트의 경우 만기시점에서 인수, 혹은
                    <br />
                    반납형 선택으로 자유롭게 차량 처분 또는
                    <br />
                    인수를 할 수 있습니다.
                  </span>
                </div>
                <div className="w-full lg:w-[33%] h-full text-center box-border lg:mb-[0.5%] mb-1">
                  <p className="w-full h-[70px] bg-[#f0433a] text-2xl text-white font-medium leading-[70px]">
                    세금할증없음
                  </p>
                  <span className="w-full block h-[160px] lg:h-[200px] bg-white px-4 py-6 lg:text-lg md:text-base text-sm">
                    렌트카는 렌트카 회사의 자산이기 때문에
                    <br />
                    개인이 렌트를 한다고 해서 고객의 자산으로
                    <br />
                    잡히지 않아 건보료, 재산세 등의 세금이
                    <br />
                    오르지 않습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full my-4">
            <div className="lg:max-w-[1080px] w-full h-full mx-auto sm:py-24 py-12">
              <div className="w-full h-full text-center">
                <p className="text-[#f0433a] mb-4">▼</p>
                <p className="italic text-[#f0433a] sm:text-4xl text-2xl font-medium">
                  장기렌트, 이런분들께 추천합니다
                </p>
              </div>
              <div className="w-full h-full box-border bg-[#8cb267] border border-[#8cb267] mt-20">
                <p className="w-full h-[70px] text-center text-xl text-white font-medium leading-[70px]">
                  법인사업자 / 개인사업자
                </p>
                <ul className="w-full block bg-white lg:px-64 md:px-36 sm:px-16 px-6 py-8 text-[#666] md:lg:text-lg md:text-base text-sm list-decimal">
                  <li>차량 구매 관련 초기비용이 부담되는 회사</li>
                  <li>업무용 차량 관리가 힘든 회사</li>
                  <li>영업이나 출장 등으로 차량 사용이 많은 회사</li>
                  <li>유류비 절감을 위해 LPG차량을 사용하고 싶은 회사</li>
                  <li>차량 소유로 인한 각종 세금이 부담되는 회사</li>
                </ul>
              </div>
              <div className="w-full h-full box-border border border-[#be946a]">
                <p className="w-full h-[70px] text-center bg-[#be946a] text-xl text-white font-medium leading-[70px]">
                  개인고객
                </p>
                <ul className="w-full block bg-white lg:px-64 md:px-36 sm:px-16 px-6 py-8 text-[#666] md:lg:text-lg md:text-base text-sm list-decimal">
                  <li>높은 보험료로 차량 이용에 부담을 느끼시는 분</li>
                  <li>
                    장거리 출퇴근이나 잦은 출장으로 유류비 절감이 필요하신 분
                  </li>
                  <li>
                    자동차에 대한 전문 지식이 없어도 드라이빙을 즐기고 싶으신 분
                  </li>
                  <li>트렌드에 따라 정기적으로 차를 바꾸시는 분</li>
                  <li>
                    구매/렌트와 꼼꼼하게 비교해 경제적으로 차를 소유하고 싶으신
                    분
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full bg-[url(/images/sub/04/sub04_02.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="max-w-[1080px] h-full box-border mx-auto pt-[95px]">
              <div className="w-full h-full text-center">
                <p className="text-white mb-4">▼</p>
                <p className="italic text-white sm:text-4xl text-2xl font-medium">
                  장기렌트 서비스 특징
                </p>
              </div>
              <div className="feature w-full h-full box-border pt-10 pb-20">
                <table className="">
                  <tbody>
                    {features.map((feat, key) => {
                      return (
                        <tr key={key} className="w-full h-[70px]">
                          <th className="w-[216px] md:text-base sm:text-sm text-xs text-white">
                            {feat.name}
                          </th>
                          <td className="w-4/5 pl-5 md:text-base sm:text-sm text-xs even:bg-[rgba(255,255,255,0.9)] odd:bg-[rgba(230,230,230,0.8)]">
                            {feat.text}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

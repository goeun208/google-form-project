import React from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

export default function CustomerInquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      title: "",
      contents: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then(async (token) => {
          const body = {
            data,
            recaptchaResponse: token,
          };

          try {
            const response = await fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json;chaset=utf-8" },
              body: JSON.stringify(body),
            });
            if (response.ok) {
              const json = await response.json();
              console.log(json);
            } else {
              throw new Error(response.statusText);
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      setTimeout(() => {
        console.log("reset");
        reset();
      }, 500);
    });
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />

      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner05.jpg)] bg-no-repeat bg-center bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 고객센터 &gt; 고객문의</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px]">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-[#666] sm:text-4xl text-2xl font-medium mb-5">
                  CONTACT <span className="text-[#e8443d]">US</span>
                </p>
                <p className="text-[#666] mb-10 md:text-base text-xs">
                  홈페이지를 이용하시다가 궁금하신 점이 있으시면 언제든지 문의를
                  해주시기 바랍니다.
                </p>
              </div>
              <div className="mb-3 lg:mx-0 mx-5">
                <h2 className="text-[#e8443d] font-semibold mb-3">
                  개인정보 수집 및 이용에 관한 동의
                </h2>
                <div
                  className="w-full h-[150px] bg-[#f7f7f7] border border-[#e9e9e9] sm:text-xs text-[10px] px-4 py-3 overflow-scroll mb-3"
                  readOnly
                >
                  개인정보처리방침
                  <br />
                  <br /> 지에스렌터카(이하 &quot;회사&quot;라 한다)는 고객님의
                  개인정보를 중요시하며, &quot;정보통신망 이용촉진 및
                  정보보호&quot;에 관한 법률을 준수하고 있습니다.
                  <br /> 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는
                  개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                  개인정보보호를 위해 어떠한 조치가 취해지고 있는지
                  알려드립니다.
                  <br />
                  회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는
                  개별공지)을 통하여 공지할 것입니다.
                  <br />
                  <br /> ■ 개인정보의 수집 및 이용목적 <br />
                  <br />
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. <br />
                  - 서비스 이용에 따른 본인식별 및 실명확인
                  <br />- 고지사항 전달, 불만처리 의사소통 경로 확보
                  <br />- 신규 서비스 등 최신정보 안내 및 개인맞춤서비스 제공을
                  위한 자료
                  <br />- 기타 원활한 양질의 서비스 제공 등<br />
                  <br />■ 수집하는 개인정보 항목
                  <br />
                  <br />
                  회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
                  수집하고 있습니다.
                  <br /> ○ 수집항목 [개인/법인소속회원]
                  <br /> - 필수정보 : 이름, 연락처
                  <br />
                  <br /> ○ 개인정보 수집방법 : 웹사이트(http://anidream.co.kr)
                  <br /> ■ 개인정보의 보유 및 이용기간
                  <br />
                  <br /> 원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는
                  해당 정보를 지체 없이 파기합니다.
                  <br /> 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                  회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
                  회원정보를 보관합니다.
                  <br />
                  <br /> ○ 관련법령에 따른 정보보유 - 표시/광고에 관한 기록 :
                  6개월 (전자상거래 등에서의 소비자보호에 관한 법률)
                  <br /> - 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래
                  등에서의 소비자보호에 관한 법률)
                  <br /> - 대금결제 및 재화 등의 공급에 관한 기록 : 5년
                  (전자상거래 등에서의 소비자보호에 관한 법률)
                  <br /> - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                  (전자상거래 등에서의 소비자보호에 관한 법률)
                  <br /> - 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
                  (신용정보의 이용 및 보호에 관한 법률)
                  <br />
                  <br /> ■ 개인정보의 파기 절차 및 방법
                  <br />
                  <br /> 회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된
                  후에는 해당 정보를 지체 없이 파기합니다.
                  <br /> 파기절차 및 방법은 다음과 같습니다.
                  <br /> ○ 파기절차
                  <br /> - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수
                  없는 기술적 방법을 사용하여 삭제합니다.
                  <br /> - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
                  통하여 파기합니다.
                  <br />
                  <br /> ■ 동의 거부권 및 불이익
                  <br />
                  <br /> 귀하는 위와 같은 본인의 개인정보 수집,이용에 관한
                  동의를 거부할 권리가 있습니다.
                </div>
                <label
                  htmlFor="agree"
                  className="flex items-center justify-end"
                >
                  <input type="checkbox" name="agree" value="1" />
                  <span className="ml-1">이용약관 동의</span>
                </label>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:mx-0 mx-5">
                  <div className="flex justify-center items-center w-full h-full mb-3 py-4 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block text-gray-700 w-1/4 text-center after:content-['*'] after:text-[#f0433a]"
                    >
                      이름
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                      id="name"
                      name="name"
                      placeholder="이름을 입력해주세요."
                      required
                    />
                  </div>
                  {/* <ErrorMessage errors={errors} name="name" as="p" /> */}
                  <div className="flex justify-center items-center w-full h-full mb-3 py-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block text-gray-700 w-1/4 text-center"
                    >
                      연락처
                    </label>
                    <input
                      {...register("phone")}
                      type="text"
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                      id="phone"
                      name="phone"
                      placeholder="연락처를 입력해주세요."
                    />
                  </div>
                  <div className="flex justify-center items-center w-full h-full mb-3 py-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block text-gray-700 w-1/4 text-center after:content-['*'] after:text-[#f0433a]"
                    >
                      제목
                    </label>
                    <input
                      {...register("title")}
                      type="text"
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                      id="title"
                      name="title"
                      placeholder="제목을 입력해주세요."
                      required
                    />
                  </div>
                  <div className="flex justify-center items-center w-full h-full mb-3 py-4">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label inline-blockf text-gray-700 w-1/4 text-center after:content-['*'] after:text-[#f0433a]"
                    >
                      내용
                    </label>
                    <textarea
                      {...register("contents")}
                      className="
                        form-control
                        block
                        w-full
                        h-[200px]
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none
                      "
                      id="contents"
                      name="contents"
                      rows="3"
                      placeholder="내용을 입력해주세요."
                      required
                    ></textarea>
                  </div>
                  <div className="flex space-x-2 justify-center">
                    <button
                      type="submit"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      보내기
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

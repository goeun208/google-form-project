import React from "react";
import Link from "next/link";

export default function InformationUse() {
  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner02.jpg)] bg-no-repeat bg-center bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 월장기대여 &gt; 차량리스트</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] bg-[url(/images/sub/bg_subglobal.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-white pb-4">▼</p>
                <p className="italic text-white sm:text-4xl text-2xl font-medium mb-8">
                  수입차(월장기대여)
                </p>
              </div>
              <div className="w-full h-full">
                <ul className="flex items-center justify-center flex-wrap">
                  <Link href="/rental/monthly/foreign?tab=benz">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_benz.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          벤츠
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/foreign?tab=audi">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_audi.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          아우디
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/foreign?tab=bmw">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_bmw.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          BMW
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/foreign?tab=rand">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_landrover.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          레인지로버
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/foreign?tab=porsche">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_porsche.png)] bg-[length:120px_130px]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          포르쉐
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/foreign?tab=etc">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_etc.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          기타
                        </span>
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[95px] lg:pb-[150px] pt-[50px] pb-[100px] bg-[url(/images/sub/bg_subkorea.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="max-w-[1080px] h-full box-border mx-auto">
              <div className="text-center">
                <p className="text-white pb-4">▼</p>
                <p className="italic text-white sm:text-4xl text-2xl font-medium mb-8">
                  국산차(월장기대여)
                </p>
              </div>
              <div className="w-full h-full">
                <ul className="flex items-center justify-center flex-wrap">
                  <Link href="/rental/monthly/domestic?tab=hyundai">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_hyundai.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          현대
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/domestic?tab=kia">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_kia.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          기아
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/domestic?tab=chevolet">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_chevrolet.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          쉐보레
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/domestic?tab=samsung">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_renaultsamsung.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          르노삼성
                        </span>
                      </li>
                    </a>
                  </Link>
                  <Link href="/rental/monthly/domestic?tab=ssangyong">
                    <a>
                      <li className="carbox bg-[url(/images/sub/logo/logo_ssangyongmotor.png)]">
                        <span className="absolute right-3 bottom-3 px-2 py-1 text-xl bg-[#f2f2f2]">
                          쌍용
                        </span>
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

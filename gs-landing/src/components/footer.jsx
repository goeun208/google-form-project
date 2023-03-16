export default function Footer() {
  return (
    <footer className="w-full h-full text-gray-600 body-font bg-zinc-800">
      <div className="container sm:w-[1080px] w-full h-full px-6 py-8 mx-auto flex items-start justify-between sm:flex-row flex-row ">
        <address className="not-italic">
          <p className="text-left text-white text-base opacity-90 mb-4">
            지에스렌터카
          </p>
          <p className="text-xs text-white opacity-80">
            대표 : 박용석 | 사업자등록번호 : 519-88-01613 <br />
            TEL : 1522-2686 | E-Mail : 00rentcar@naver.com <br />
            주소 : 서울시 금천구 두산로 70, A동 1512호
          </p>
          <p className="text-xs text-white sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 opacity-80">
            © 2022 지에스렌터카 ALL RIGHT RESERVED.
          </p>
        </address>
        {/* pc버전 */}
        <div className="sm:block hidden">
          <a
            href="https://talk.naver.com/ct/wcaaet"
            target="_blank"
            rel="noreferrer"
            className="inline-block leading-8 rounded text-sm w-[100px] h-[32px] bg-[#00c73c] text-white bg-[url(/images/ico_contact_naver.png)] bg-no-repeat bg-left pl-8 pr-1.5 ml-1"
          >
            톡톡문의
          </a>
          <a
            href="http://pf.kakao.com/_xeUxhhs"
            target="_blank"
            rel="noreferrer"
            className="inline-block leading-8 rounded text-sm w-[100px] h-[32px] bg-[#fae101] bg-[url(/images/ico_contact_kakao.png)] bg-no-repeat bg-left pl-8 pr-1.5 ml-1"
          >
            카카오톡
          </a>
          <a
            href="tel:1522-2686"
            className="inline-block leading-8 rounded text-sm w-[100px] h-[32px] bg-[#e8443d] text-white bg-[url(/images/ico_contact_tel.png)] bg-no-repeat bg-left pl-8 pr-1.5 ml-1"
          >
            전화문의
          </a>
        </div>
      </div>
      {/* mobile 버전 */}
      <div className="sm:hidden block w-full fixed -bottom-2">
        <a
          href="https://talk.naver.com/ct/wcaaet"
          target="_blank"
          rel="noreferrer"
          className="inline-block box-border overflow-hidden leading-[60px] text-center text-xl w-1/3 xl:h-[60px] h-[60px] border-[#00af35] bg-[#00c73c] text-white bg-[url(/images/ico_contact_naver_m.png)] bg-no-repeat bg-[length:30%_90%] bg-left pl-8 pr-1.5"
        >
          톡톡문의
        </a>
        <a
          href="http://pf.kakao.com/_xeUxhhs"
          target="_blank"
          rel="noreferrer"
          className="inline-block box-border overflow-hidden leading-[60px] text-center text-xl w-1/3 h-[60px] border-[#fdd200] bg-[#fae101] bg-[url(/images/ico_contact_kakao_m.png)] bg-no-repeat bg-left bg-[length:28%_90%] pl-8 pr-1.5"
        >
          카카오톡
        </a>
        <a
          href="tel:1522-2686"
          className="inline-block box-border overflow-hidden leading-[60px] text-center text-xl w-1/3 h-[60px] border-[#c9223d] bg-[#e8443d] text-white bg-[url(/images/ico_contact_tel_m.png)] bg-no-repeat bg-left bg-[length:28%_90%] pl-8 pr-1.5"
        >
          전화문의
        </a>
      </div>
    </footer>
  );
}

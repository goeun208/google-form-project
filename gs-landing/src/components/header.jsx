import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header>
        <div className="w-full h-full flex flex-nowrap items-center justify-between lg:p-8 p-6 border-b border-red-500">
          <Link href="/">
            <a>
              <div className="relative lg:w-44 lg:h-14 w-36 h-12 cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <ul className="mx-auto hidden items-center lg:flex md:hidden">
              <li className="group xl:mx-8 lg:mx-4 md:mx-2 inline-block relative z-10">
                <Link href="/rental/general">
                  <a className="font-medium text-lg">일반대여</a>
                </Link>
                <ul className="absolute hidden pt-2 group-hover:block">
                  <li>
                    <Link href="/rental/general/domestic">
                      <a className="rounded-t bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        국산차
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rental/general/foreign">
                      <a className="rounded-b bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        수입차
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group xl:mx-8 lg:mx-4 md:mx-2 inline-block relative z-10">
                <Link href="/rental/monthly">
                  <a className="font-medium text-lg">월장기대여</a>
                </Link>
                <ul className="absolute hidden pt-2 group-hover:block">
                  <li>
                    <Link href="/rental/monthly/domestic">
                      <a className="rounded-t bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        국산차
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rental/monthly/foreign">
                      <a className="rounded-b bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        수입차
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group xl:mx-8 lg:mx-4 md:mx-2 inline-block relative z-10">
                <Link href="/courtesyCar">
                  <a className="font-medium text-lg">사고대차</a>
                </Link>
                <ul className="absolute hidden pt-2 group-hover:block">
                  <li>
                    <Link href="/courtesyCar">
                      <a className="rounded bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        이용안내
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group xl:mx-8 lg:mx-4 md:mx-2 inline-block relative z-10">
                <Link href="/newRental">
                  <a className="font-medium text-lg">신차장기렌트</a>
                </Link>
                <ul className="absolute hidden pt-2 group-hover:block">
                  <li>
                    <Link href="/newRental">
                      <a className="rounded bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        이용안내
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group xl:mx-8 lg:mx-4 md:mx-2 inline-block relative z-10">
                <Link href="/serviceCenter">
                  <a className="font-medium text-lg">고객센터</a>
                </Link>
                <ul className="object absolute hidden pt-2 group-hover:block">
                  <li>
                    <Link href="/serviceCenter/info">
                      <a className="rounded-t bg-red-500 opacity-95 text-white text-sm hover:bg-red-700 py-3 px-8 block whitespace-pre">
                        이용안내
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/serviceCenter/map">
                      <a className="bg-red-500 opacity-95 text-white hover:bg-red-700 text-sm py-3 px-8 block whitespace-pre">
                        오시는길
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/serviceCenter/inquiry">
                      <a className="rounded-b bg-red-500 opacity-95 text-white hover:bg-red-700 text-sm py-3 px-8 block whitespace-pre">
                        고객문의
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* md 사이즈 이상일때는 hidden 그 이하로는 flex */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {!toggleMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <a
            href="tel:1522-2686"
            className="relative hidden w-24 h-14 xl:ml-20 lg:ml-5 lg:block"
          >
            <Image
              src="/images/main_header_01.png"
              alt="header"
              layout="fill"
            />
          </a>
        </div>
        <div
          className={classNames(
            "lg:hidden absolute top-30 bg-white opacity-90 font-medium text-center z-10 w-full",
            {
              hidden: !toggleMenu,
            }
          )}
        >
          <Link href="/rental/general">
            <a
              className="block py-4 px-4 border-b text-md hover:bg-gray-200"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              일반대여
            </a>
          </Link>
          <Link href="/rental/monthly">
            <a
              className="block py-4 px-4 border-b text-md hover:bg-gray-200"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              월장기대여
            </a>
          </Link>
          <Link href="/courtesyCar">
            <a
              className="block py-4 px-4 border-b text-md hover:bg-gray-200"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              사고대차
            </a>
          </Link>
          <Link href="/newRental">
            <a
              className="block py-4 px-4 border-b text-md hover:bg-gray-200"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              신차장기렌트
            </a>
          </Link>
          <Link href="/serviceCenter">
            <a
              className="block py-4 px-4 border-b text-md hover:bg-gray-200"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              고객센터
            </a>
          </Link>
          <div className="bg-red-500 text-white text-sm">
            <Link href="/serviceCenter/info">
              <a
                className="block py-4 px-4 hover:underline"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                이용안내
              </a>
            </Link>
            <Link href="/serviceCenter/map">
              <a
                className="block py-4 px-4 hover:underline"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                오시는길
              </a>
            </Link>
            <Link href="/serviceCenter/inquiry">
              <a
                className="block py-4 px-4 hover:underline"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                고객문의
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

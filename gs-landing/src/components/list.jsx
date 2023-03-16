import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/main/main_01_01.jpg",
  "/images/main/main_01_02.jpg",
  "/images/main/main_01_03.jpg",
  "/images/main/main_01_04.jpg",
];

export function List() {
  return (
    <>
      <section className="container w-full h-full mx-auto -translate-y-14">
        <div className="max-w-[1080px] h-full box-border mx-auto flex flex-row justify-center items-center flex-wrap md:flex-nowrap">
          {images.map((image, key) => (
            <div
              key={key}
              className="relative md:w-[270px] lg:h-[305px] h-52 w-[50%]"
            >
              <Image
                src={image}
                alt="main"
                layout="fill"
                quality={100}
                priority
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Rental() {
  return (
    <>
      <article className="container mx-auto w-full h-full flex justify-center items-center flex-wrap md:flex-nowrap mb-2.5 -mt-11">
        <section className="bg-gray-200 lg:mr-2.5 mr-0 lg:w-[535px] mb-2.5 md:mb-0 w-full h-full">
          <div className="px-5 py-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">일반대여</h2>
              <Link href="/rental/general">
                <a>
                  <div className="text-lg font-medium">+</div>
                </a>
              </Link>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative lg:w-[50%] w-full lg:h-32 h-28 bg-white mr-1.5">
                <Image
                  src="/images/국내/티볼리.png"
                  alt="티볼리"
                  layout="fill"
                />
                <span className="lg:w-full w-full before:w-full before:block before:absolute before:-inset-4 before:bg-zinc-500 before:content-['티볼리'] absolute inline-block opacity-90 text-white text-center leading-8 bottom-4 left-4" />
              </div>
              <div className="relative lg:w-[50%] w-full lg:h-32 h-28 bg-white">
                <Image src="/images/국내/sm6.png" alt="sm6" layout="fill" />
                <span className="lg:w-full w-full before:w-full before:block before:absolute before:-inset-4 before:bg-zinc-500 before:content-['SM6'] absolute inline-block opacity-90 text-white text-center leading-8 bottom-4 left-4" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 lg:w-[535px] w-full h-full">
          <div className="px-5 py-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">월장기대여</h2>
              <Link href="/rental/monthly">
                <a>
                  <div className="text-lg font-medium">+</div>
                </a>
              </Link>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative lg:w-[50%] w-full lg:h-32 h-28 bg-white mr-1.5">
                <Image
                  src="/images/국내/그랜저.png"
                  alt="그랜저"
                  layout="fill"
                />
                <span className="lg:w-full w-full before:w-full before:block before:absolute before:-inset-4 before:bg-zinc-500 before:content-['그랜저'] absolute inline-block opacity-90 text-white text-center leading-8 bottom-4 left-4" />
              </div>
              <div className="relative lg:w-[50%] w-full lg:h-32 h-28 bg-white">
                <Image src="/images/국내/gv80.png" alt="gv80" layout="fill" />
                <span className="lg:w-full w-full before:w-full before:block before:absolute before:-inset-4 before:bg-zinc-500 before:content-['GV80'] absolute inline-block opacity-90 text-white text-center leading-8 bottom-4 left-4" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export function Consult() {
  return (
    <>
      <section className="container w-full h-full mx-auto sm:mb-16 mb-4">
        <div className="max-w-[1080px] h-full box-border mx-auto flex flex-row flex-wrap md:flex-nowrap justify-center items-center">
          <div className="relative lg:w-[50%] w-full h-60 lg:mr-2.5 mr-0 md:mb-0 mb-2.5">
            <Image
              src="/images/banner_consult_01.jpg"
              alt="상담 및 문의 전화 : 1522-2686 / 010-4059-1599"
              layout="fill"
              quality={100}
              priority="true"
            />
          </div>
          <div className="relative lg:w-[50%] w-full h-60">
            <Image
              src="/images/banner_consult_02.jpg"
              alt="카카오톡 친구추가 : 01rentcar"
              layout="fill"
              quality={100}
              priority="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}

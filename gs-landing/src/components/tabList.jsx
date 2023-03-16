import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  AllList,
  HyundaiList,
  KiaList,
  ChevoList,
  SamList,
  SyList,
} from "./carList";

export function AllCar() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;

  const [searchData, setSearchData] = useState(AllList);
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef(null);

  const MoreHandle = () => {
    limit < searchData.length
      ? setLimit(limit + end)
      : alert("더이상 게시물이 없습니다.");
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const { value } = e.target;
    value = value.replace(/\\/gi, "/");
    setSearchInput(value);
  };

  // input창 입력 받을때마다 필터링.
  // useEffect(() => {
  //   setSearchData(
  //     AllList.filter(
  //       (item) =>
  //         item.name.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1
  //       // (item) => item.name.toUpperCase().includes(searchInput.toUpperCase())
  //     )
  //   );
  // }, [searchInput]);

  // 검색버튼 누르면 필터링
  const searchClick = () => {
    setSearchData(
      AllList.filter((item) => {
        const re = new RegExp(searchInput, "gi");
        return item.name.match(re);
      })
    );
    inputRef.current.focus();
  };

  // input 입력 후 엔터시 필터링
  const keyDownHandle = (e) => {
    if (e.key === "Enter") {
      searchClick();
    }
  };

  const data = searchData.slice(start, end);

  return (
    <>
      {data.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                    priority="true"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-medium mt-5">
          찾으시는 차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
        <div className="mb-3 lg:w-80 relative mt-5">
          <input
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
            id="searchInput"
            value={searchInput}
            onChange={searchHandle}
            onKeyDown={keyDownHandle}
            placeholder="찾으시는 차량명을 검색해보세요."
            autoComplete="off"
            ref={inputRef}
          />
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 opacity-70"
            onClick={searchClick}
            type="submit"
          >
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export function HyundaiCar() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;
  const data = HyundaiList.slice(start, end);

  const MoreHandle = () => {
    if (limit < HyundaiList.length) {
      setLimit(limit + end);
    } else {
      alert("더이상 게시물이 없습니다.");
    }
  };

  return (
    <>
      {HyundaiList.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
      </div>
    </>
  );
}

export function KiaCar() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;
  const data = KiaList.slice(start, end);

  const MoreHandle = () => {
    if (limit < KiaList.length) {
      setLimit(limit + end);
    } else {
      alert("더이상 게시물이 없습니다.");
    }
  };

  return (
    <>
      {KiaList.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
      </div>
    </>
  );
}

export function CheCar() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;
  const data = ChevoList.slice(start, end);

  const MoreHandle = () => {
    if (limit < ChevoList.length) {
      setLimit(limit + end);
    } else {
      alert("더이상 게시물이 없습니다.");
    }
  };

  return (
    <>
      {ChevoList.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
      </div>
    </>
  );
}

export function SamCar() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;
  const data = SamList.slice(start, end);

  const MoreHandle = () => {
    if (limit < SamList.length) {
      setLimit(limit + end);
    } else {
      alert("더이상 게시물이 없습니다.");
    }
  };

  return (
    <>
      {SamList.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
      </div>
    </>
  );
}

export function SsangYong() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(20);
  const end = start + limit;
  const data = SyList.slice(start, end);

  const MoreHandle = () => {
    if (limit < SyList.length) {
      setLimit(limit + end);
    } else {
      alert("더이상 게시물이 없습니다.");
    }
  };

  return (
    <>
      {SyList.length > 0 ? (
        <div className="w-full h-full flex items-center lg:justify-start justify-center flex-wrap">
          {data.map((car, key) => {
            return (
              <div
                key={key}
                className="car-list relative lg:w-[24%] md:w-[46%] w-full h-full border border-[#ccc] mb-4"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={car.src}
                    alt={car.name}
                    layout="fill"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <span className="w-full block border-t border-[#ccc] text-center text-xl font-medium absolute bottom-0 py-1">
                  {car.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          차량이 없습니다.
        </div>
      )}
      <div className="w-full h-full text-center mt-5 py-1">
        <button onClick={MoreHandle} className="more-button">
          <span className="flex justify-center items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            더보기 (MORE)
          </span>
        </button>
      </div>
    </>
  );
}

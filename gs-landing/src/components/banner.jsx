import React from "react";
import Slider from "react-slick";
// import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "30px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  // console.log(className, style, onclick);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "30px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const images = [
  "/images/main/visual01.jpg",
  "/images/main/visual02.jpg",
  "/images/main/visual03.jpg",
  "/images/main/visual04.jpg",
];

export default function Slide() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    spped: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          bottom: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // dot custom
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
  };

  return (
    <>
      <Slider {...settings} className="w-full h-full">
        {images.map((image, key) => (
          <div key={key} className="relative w-full lg:h-[38rem] h-[24rem]">
            <Image
              src={image}
              alt="visual"
              layout="fill"
              sizes="100%"
              objectFit="cover"
              quality={100}
              priority="true"
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

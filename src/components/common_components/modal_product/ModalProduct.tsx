import { useMemo, useState } from "react";

import { Container } from "../container/Container";

import Image from "next/image";

import Slider from "react-slick";

import {
  AiFillHeart,
  AiFillWechat,
  AiOutlineShareAlt,
  AiOutlineClose,
} from "react-icons/ai";
import { VscArrowSwap } from "react-icons/vsc";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { Rating } from "../rating/Rating";

const NextModalArrow = (props: any) => {
  const { onClick, nextSlide } = props;
  const setNext = () => {
    nextSlide();
    onClick();
  };
  return (
    <div
      onClick={setNext}
      className="slider_modal_arrow slider_modal__arrow-next"
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevModalArrow = (props: any) => {
  const { onClick, prevSlide } = props;
  const setNext = () => {
    prevSlide();
    onClick();
  };

  return (
    <div
      onClick={setNext}
      className="slider_modal_arrow slider_modal__arrow-prev"
    >
      <RiArrowLeftSLine />
    </div>
  );
};

const socialLeft = [
  { id: 1, svg: AiFillHeart, text: 27 },
  { id: 2, svg: AiFillWechat, text: 12 },
  { id: 3, svg: AiOutlineShareAlt, text: 23 },
];
const socialRight = [
  { id: 1, svg: AiOutlineShareAlt, text: "SHARE" },
  { id: 2, svg: VscArrowSwap, text: "COMPARE" },
  { id: 3, svg: AiFillHeart, text: "ADD TO WISHLIST" },
];

export const ModalProduct = () => {
  const images: any[] = [
    { id: 1, img: 1 },
    { id: 2, img: 2 },
    { id: 3, img: 3 },
    { id: 4, img: 4 },
    { id: 5, img: 5 },
  ];

  const [indexSlide, setIndexSlide] = useState<number>(0);

  const nextSlide = () => {
    setIndexSlide((state): number =>
      state + 1 < images.length ? state + 1 : (state = 0)
    );
  };

  const prevSlide = () => {
    setIndexSlide((state): number =>
      state - 1 >= 0 ? state - 1 : (state = images.length - 1)
    );
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    infinite: true,
    nextArrow: <NextModalArrow nextSlide={nextSlide} />,
    prevArrow: <PrevModalArrow prevSlide={prevSlide} />,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    // ],
  };

  return (
    <div className="modal_product">
      <Container>
        <div className="modal_product_inner">
          <div className="modal_product_left">
            <div className="modal_product_left-social">
              {socialLeft.map((item) => (
                <span key={item.id}>
                  <item.svg /> {item.text}
                </span>
              ))}
            </div>
            <div className="modal_product_bigimage-wrapper">
              {/* <Image src={sliderImg} alt="main slider image" layout="fill" /> */}
              <div>{images[indexSlide].img}</div>
            </div>
            <div className="modal_product_slider">
              <Slider {...settings}>
                {images.map((item) => (
                  <div className="modal_product_slide" key={item.id}>
                    {item.img}
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="modal_product_right">
            <div className="modal_product_right-inner">
              <div className="modal_product_bread_crumbs">
                <span>
                  Chair <RiArrowRightSLine />{" "}
                </span>
                <span>Products</span>
              </div>

              <h3 className="modal_product_title">KAILA FABRIC CHAIR</h3>

              <div className="modal_product_rating-box">
                <Rating num={4} />
                <span>Reviews(12)</span>
              </div>

              <div className="modal_product_right-social">
                {socialRight.map((item) => (
                  <span key={item.id}>
                    <item.svg />
                    {item.text}
                  </span>
                ))}
              </div>

              <div className="modal_product_text-wrapper">
                <p>
                  Koila is a chair designed for restaurants and food lovers in
                  general. Designed in collaboration with restaurant
                  professionals, it ensures comfort and an ideal posture, as
                  there are armrests on both sides of the chair.
                </p>

                <p>
                  Koila is a seat designed for restaurants and gastronomic
                  places in general. Designed in collaboration with professional
                  of restaurants and hotels field, this armchair is composed of
                  a curved shell with a base in oak who has pinched the back
                  upholstered in fabric or leather. It provides comfort and
                  holds for ideal sitting position,the arms may rest on the
                  sides ofthe armchair.
                </p>
              </div>

              <h4 className="modal_product_price">
                200 000 <span>500 000</span> сум
              </h4>

              <div className="modal_product_add-wrapper">
                <p>QTY</p>
                <form>
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <button type="button">ADD TO CARD</button>
                </form>
              </div>
            </div>
            <AiOutlineClose className="modal_product_close" />
          </div>
        </div>
      </Container>
    </div>
  );
};

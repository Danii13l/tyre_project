import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "../../container/Container";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pagin_grey from "../../../images/hero/Pagination__navigation-grey.png";
import pagin_white from "../../../images/hero/Pagination__navigation-white.png";

export const Hero: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className={"hero"}>
      <Container>
        <div className={"hero_inner"}>
          <div className={"hero_main_item"}>
            <Slider {...settings}>
              <div className="hero_main_item-slides">
                <Link href="#!">
                  <a className="hero_link">КУПИТЬ СЕЙЧАС</a>
                </Link>
              </div>
              <div className="hero_main_item-slides">
                <Link href="#!">
                  <a className="hero_link">КУПИТЬ СЕЙЧАС</a>
                </Link>
              </div>
              <div className="hero_main_item-slides">
                <Link href="#!">
                  <a className="hero_link">КУПИТЬ СЕЙЧАС</a>
                </Link>
              </div>
              <div className="hero_main_item-slides">
                <Link href="#!">
                  <a className="hero_link">КУПИТЬ СЕЙЧАС</a>
                </Link>
              </div>
              <div className="hero_main_item-slides">
                <Link href="#!">
                  <a className="hero_link">КУПИТЬ СЕЙЧАС</a>
                </Link>
              </div>
            </Slider>
          </div>
          <div className={"hero_second_item"}>
            <Link href="#!">
              <a className="hero_link">
                КУПИТЬ СЕЙЧАС
                <span>
                  <Image src={pagin_white} alt="navigation" />
                </span>
              </a>
            </Link>
          </div>
          <div className={"hero_third_item"}>
            <Link href="#!">
              <a className="hero_link">
                КУПИТЬ СЕЙЧАС
                <span>
                  <Image src={pagin_grey} alt="navigation" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

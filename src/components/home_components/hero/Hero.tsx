import React, { FC } from "react";

import Image from "next/image";

import { Container } from "../../common_components/container/Container";
import { Darkening } from "../../common_components/darkening/Darkening";
import { LinkTo } from "../../common_components/link_to/LinkTo";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// fake
import slides from "../../../images/fake_photo/hero_slider.png";
import michelin from "../../../images/fake_photo/michelin.jpg";
import brid from "../../../images/fake_photo/bridgestone.jpg";

export const Hero: FC = (): JSX.Element => {
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
    <div className="hero">
      <Container>
        <div className="hero_inner">
          <div className="hero_main_item">
            <Slider {...settings}>
              <div className="hero_main_item-slides">
                <LinkTo
                  href="#!"
                  y="big"
                  x="left"
                  text="Как правильно подобрать шины?"
                />

                <div className="hero_img_wrapper">
                  <Image src={slides} alt="s" layout="fill" objectFit="cover" />
                </div>
                <Darkening />
              </div>
              <div className="hero_main_item-slides">
                <LinkTo
                  href="#!"
                  y="big"
                  x="left"
                  text="Как правильно подобрать шины?"
                />

                <div className="hero_img_wrapper">
                  <Image src={slides} alt="s" layout="fill" objectFit="cover" />
                </div>
                <Darkening />
              </div>
            </Slider>
          </div>
          <div className="hero_second_item">
            <LinkTo href="#!" y="small" x="right" text="КУПИТЬ СЕЙЧАС" />
            <p className="hero_subtitles">Шины MICHELIN</p>
            <div className="hero_img_wrapper">
              <Image src={michelin} alt="s" layout="fill" objectFit="cover" />
            </div>
            <Darkening />
          </div>

          <div className="hero_third_item">
            <LinkTo href="#!" y="small" x="right" text="КУПИТЬ СЕЙЧАС" />
            <p className="hero_subtitles">Шины BRIDGESTONE</p>
            <div className="hero_img_wrapper">
              <Image src={brid} alt="s" layout="fill" objectFit="cover" />
            </div>
            <Darkening />
          </div>
        </div>
      </Container>
    </div>
  );
};

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "../../common_components/container/Container";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LinkTo } from "../../common_components/LinkTo/LinkTo";

import pr from "../../../images/slide_examples/a.jpg";

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
                  color="grey"
                  text="КУПИТЬ СЕЙЧАС"
                />

                <Image src={pr} alt="s" layout="fill" />
              </div>
              <div className="hero_main_item-slides">
                <LinkTo
                  href="#!"
                  y="big"
                  x="left"
                  color="grey"
                  text="КУПИТЬ СЕЙЧАС"
                />
              </div>
            </Slider>
          </div>
          <div className="hero_second_item">
            <LinkTo
              href="#!"
              y="small"
              x="right"
              color="white"
              text="КУПИТЬ СЕЙЧАС"
            />
          </div>
          <div className="hero_third_item">
            <LinkTo
              href="#!"
              y="small"
              x="right"
              color="grey"
              text="КУПИТЬ СЕЙЧАС"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

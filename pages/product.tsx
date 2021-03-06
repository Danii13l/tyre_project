import { useState, useCallback } from "react";

import { NextPage } from "next";
import Image from "next/image";

import { Container } from "../src/components/common_components/container/Container";
import { SeasonCountry } from "./../src/components/common_components/season_country/SeasonCountry";
import { Rating } from "./../src/components/common_components/rating/Rating";
import { BreadCrumbs } from "./../src/components/common_components/bread_crumbs/BreadCrumbs";

import Slider from "react-slick";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

// fake
import country from "../src/images/fake_photo/HU.png";
import season from "../src/images/fake_photo/seasons.svg";
import balloon from "../src/images/fake_photo/balloon3.png";
import balloon2 from "../src/images/fake_photo/balloon2.png";
import Head from "next/head";
import { ButtonMain } from "../src/components/common_components/button_main/ButtonMain";

const NextdetailArrow = (props: any): JSX.Element => {
  const { onClick, nextSlide, className } = props;
  const disabled = className.split(" ")[2];
  return (
    <div
      onClick={onClick}
      onMouseDown={nextSlide}
      className={`slider_detail_arrow slider_detail__arrow-next ${
        disabled ? "slider_detail__arrow_dis" : ""
      }`}
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevdetailArrow = (props: any): JSX.Element => {
  const { onClick, prevSlide, className } = props;

  const disabled = className.split(" ")[2];
  return (
    <div
      onClick={onClick}
      onMouseDown={prevSlide}
      className={`slider_detail_arrow slider_detail__arrow-prev ${
        disabled ? "slider_detail__arrow_dis" : ""
      }`}
    >
      <RiArrowLeftSLine />
    </div>
  );
};

const Product: NextPage = (): JSX.Element => {
  const images: any[] = [
    { id: 1, img: balloon },
    { id: 2, img: balloon },
    { id: 3, img: balloon2 },
    { id: 4, img: balloon },
    { id: 5, img: balloon2 },
  ];

  const [indexSlide, setIndexSlide] = useState<number>(0);

  const nextSlide = useCallback((): void => {
    if (indexSlide + 1 < images.length)
      setIndexSlide((state): number => state + 1);
  }, [images.length, indexSlide]);

  const prevSlide = useCallback((): void => {
    if (indexSlide - 1 >= 0) setIndexSlide((state): number => state - 1);
  }, [indexSlide]);

  const clickSlide = useCallback((num: number): (() => void) => {
    return (): void => setIndexSlide(num);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextdetailArrow nextSlide={nextSlide} />,
    prevArrow: <PrevdetailArrow prevSlide={prevSlide} />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },

    // ],
  };
  return (
    <div className="detail_product">
      <Head>
        <title>???????????? ????????????</title>
      </Head>
      <Container>
        <BreadCrumbs
          list={[{ id: 1, href: "/", text: "??????????????" }]}
          last="??????????"
        />
        <h1 className="product_title">Pirelli Scorpion Verde All Season</h1>
        <div className="detail_product_inner">
          <div className="detail_product_left">
            <div className="detail_product_left-social">
              <div className="detail_product_social_item">
                <Image
                  src="/images/common/favorite.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>{212}</span>
              </div>
              <div className="detail_product_social_item">
                <Image
                  src="/images/common/forum.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>{212}</span>
              </div>
              <div className="detail_product_social_item">
                <Image
                  src="/images/common/share.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>{212}</span>
              </div>
            </div>

            <div className="detail_slider_wrapper">
              <div className="detail_slider_main_img">
                <Image
                  src={images[indexSlide].img}
                  alt="slider"
                  layout="fill"
                />
              </div>

              <div className="detail_slides_wrapper">
                <Slider {...settings} className="detail_slider">
                  {images.map((item, i) => {
                    return (
                      <div
                        className={`detail_slide ${
                          i === indexSlide ? "active" : ""
                        }`}
                        key={item.id}
                        onClick={clickSlide(i)}
                      >
                        <div className="detail_slide_img">
                          <Image src={item.img} alt="slide" layout="fill" />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>

          <div className="detail_product_right">
            <div className="detail_product_right-inner">
              <div className="detail_product_bread_crumbs">
                <BreadCrumbs
                  list={[{ id: 1, href: "/", text: "??????????????" }]}
                  last="????????????????"
                />
              </div>

              <h3 className="detail_product_title">
                Pirelli Cinturato P7 Verde All Season
              </h3>

              <p className="detail_product_size">225/55r17</p>

              <div className="detail_product_size_season_wrapper">
                <SeasonCountry text="??????????????" img={country} big country />

                <SeasonCountry text="??????????????????????" img={season} big />
              </div>

              <div className="detail_product_rating-box">
                <Rating num={4} style="big" />
                <p>???????????? (12)</p>
              </div>

              <div className="detail_product_right-social">
                <div className="detail_product_social_item">
                  <Image
                    src="/images/common/share.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span>????????????????????</span>
                </div>

                <div className="detail_product_social_item">
                  <Image
                    src="/images/common/favorite2.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />{" "}
                  <span>?? ??????????????????</span>
                </div>
              </div>

              <div className="detail_product_text-wrapper">
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

              <h4 className="detail_product_price">
                <span>600 000 </span>
                500 000 ??????
              </h4>

              <div className="detail_product_add_wrapper">
                <p className="detail_product_add_qty">??????-????</p>

                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>

                <div className="detail_product_add_btn">
                  <ButtonMain text="?? ????????????????" type="button" />
                </div>

                <div className="detail_product_add_tottal">
                  <span>?????????? ???? ??????????:</span>
                  <p>500 000 ??????</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;

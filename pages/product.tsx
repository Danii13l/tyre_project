import { Container } from "../src/components/common_components/container/Container";
import { SeasonCountry } from "./../src/components/common_components/season_country/SeasonCountry";
import { Rating } from "./../src/components/common_components/rating/Rating";
import { BreadCrumbs } from "./../src/components/common_components/bread_crumbs/BreadCrumbs";

import { FC, useState } from "react";

import Image from "next/image";

import Slider from "react-slick";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import favorite from "../src/images/icons/favorite.svg";
import favorite2 from "../src/images/icons/favorite2.svg";
import forum from "../src/images/icons/forum.svg";
import share from "../src/images/icons/share.svg";
import share2 from "../src/images/icons/share2.svg";
import compare from "../src/images/icons/compare.svg";

// fake
import country from "../src/images/fake_photo/HU.png";
import season from "../src/images/fake_photo/seasons.svg";
import balloon from "../src/images/fake_photo/balloon3.png";
import balloon2 from "../src/images/fake_photo/balloon2.png";
import Head from "next/head";

const NextdetailArrow = (props: any) => {
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

const PrevdetailArrow = (props: any) => {
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

const Product = () => {
  const images: any[] = [
    { id: 1, img: balloon },
    { id: 2, img: balloon },
    { id: 3, img: balloon2 },
    { id: 4, img: balloon },
    { id: 5, img: balloon2 },
  ];

  const [indexSlide, setIndexSlide] = useState<number>(0);

  const nextSlide = (clb: () => void) => {
    if (indexSlide + 1 < images.length)
      setIndexSlide((state): number => state + 1);
  };

  const prevSlide = () => {
    if (indexSlide - 1 >= 0) setIndexSlide((state): number => state - 1);
  };

  const clickSlide = (num: number): (() => void) => {
    return (): void => setIndexSlide(num);
  };

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
        <title>Детали товара</title>
      </Head>
      <Container>
        <BreadCrumbs
          list={[{ id: 1, href: "/", text: "Главная" }]}
          last="Товар"
        />
        <h1 className="product_title">Pirelli Scorpion Verde All Season</h1>
        <div className="detail_product_inner">
          <div className="detail_product_left">
            <div className="detail_product_left-social">
              <div className="detail_product_social_item">
                <Image src={favorite} alt="icon" width={24} height={24} />
                <span>{212}</span>
              </div>
              <div className="detail_product_social_item">
                <Image src={forum} alt="icon" width={24} height={24} />
                <span>{212}</span>
              </div>
              <div className="detail_product_social_item">
                <Image src={share} alt="icon" width={24} height={24} />
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
                  list={[{ id: 1, href: "/", text: "Каталог" }]}
                  last="Легковые"
                />
              </div>

              <h3 className="detail_product_title">
                Pirelli Cinturato P7 Verde All Season
              </h3>

              <p className="detail_product_size">225/55r17</p>

              <div className="detail_product_size_season_wrapper">
                <SeasonCountry text="Венгрия" img={country} big country />

                <SeasonCountry text="Всесезонные" img={season} big />
              </div>

              <div className="detail_product_rating-box">
                <Rating num={4} style="big" />
                <p>Оценки (12)</p>
              </div>

              <div className="detail_product_right-social">
                <div className="detail_product_social_item">
                  <Image src={share2} alt="icon" width={24} height={24} />{" "}
                  <span>поделиться</span>
                </div>
                <div className="detail_product_social_item">
                  <Image src={compare} alt="icon" width={24} height={24} />{" "}
                  <span>сравнить</span>
                </div>
                <div className="detail_product_social_item">
                  <Image src={favorite2} alt="icon" width={24} height={24} />{" "}
                  <span>в избранное</span>
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
                500 000 сум
              </h4>

              <div className="detail_product_add_wrapper">
                <p className="detail_product_add_qty">Кол</p>

                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                <button type="button">В корзинку</button>

                <div className="detail_product_add_tottal">
                  <span>Всего на сумму:</span>
                  <p>500 000 сум</p>
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

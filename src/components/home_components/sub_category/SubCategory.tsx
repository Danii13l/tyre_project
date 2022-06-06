import { Container } from "../../common_components/container/Container";

import Slider from "react-slick";

import { NextArrow } from "../../common_components/slider_arrow/NextArrow";
import { PrevArrow } from "../../common_components/slider_arrow/PrevArrow";

import china from "../../../images/fake_photo/HU.png";
import balloon2 from "../../../images/fake_photo/balloon2.png";
import { SmallCard } from "./../../common_components/small_card/SmallCard";

const fakeData = [
  {
    id: 1,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: false,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
  {
    id: 1,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: true,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
  {
    id: 2,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: false,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
  {
    id: 3,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: false,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
  {
    id: 4,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: false,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
  {
    id: 5,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: china,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    discount: 23,
    isNew: true,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
];

export const SubCategory = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="sub_category">
      <Container>
        <div className="sub_category__inner">
          <div className="sub_category__top">
            <div className="sub_category__title_wrapper">
              <h2>Легковые</h2>
              <p>КАРТКОЕ НАЗВАНИЕ ИЛИ ОПИСАНИЕ</p>
            </div>
          </div>
          <div className="sub_category__slider">
            <Slider {...settings}>
              {fakeData.map((slide) => {
                return (
                  <div key={slide.id} className="sub_category__slide">
                    <SmallCard {...slide} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

import { FC, useState } from "react";

import { Container } from "../../common_components/container/Container";
import { NextArrow } from "./../../common_components/slider_arrow/NextArrow";
import { PrevArrow } from "./../../common_components/slider_arrow/PrevArrow";
import { BigCard } from "./../../common_components/big_card/BigCard";

import Slider from "react-slick";

interface buttonsInt {
  id: number;
  text: string;
}

const buttons: buttonsInt[] = [
  { id: 1, text: "ПОПУЛЯРНОЕ" },
  { id: 2, text: "НОВИНКИ" },
  { id: 3, text: "ПОПУЛЯРНОЕ" },
];

import china from "../../../images/fake_photo/HU.png";
import balloon2 from "../../../images/fake_photo/balloon2.png";

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

export const ChooseProductBy: FC = (): JSX.Element => {
  const [activeButton, setAvtiveButton] = useState<number>(1);

  const handleActiveButton = (ev: any) => {
    setAvtiveButton(+ev.target.dataset.id);
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="choose_product_by">
      <Container>
        <div className="choose_product_by__inner">
          <div className="choose_product_by__top">
            <div className="choose_product_by__top-buttons">
              {buttons.map((item) => (
                <button
                  key={item.id}
                  data-id={item.id}
                  onClick={handleActiveButton}
                  className={item.id === activeButton ? "active" : ""}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          <div className="choose_product_by__slides">
            <Slider {...settings}>
              {fakeData.map((item) => {
                return (
                  <div key={item.id} className="choose_product_by__slide">
                    <BigCard {...item} />
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

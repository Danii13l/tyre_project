import { useState } from "react";

import { Container } from "../../common_components/container/Container";
import { NextArrow } from "./../../common_components/slider_arrow/NextArrow";
import { PrevArrow } from "./../../common_components/slider_arrow/PrevArrow";

import Slider from "react-slick";
import { Rating } from "./../../common_components/rating/Rating";

interface buttonsInt {
  id: number;
  text: string;
}

const buttons = [
  { id: 1, text: "ПОПУЛЯРНОЕ" },
  { id: 2, text: "НОВИНКИ" },
  { id: 3, text: "ПОПУЛЯРНОЕ" },
];

const sliderItems = [
  {
    id: 1,
    text: "Стол из массива",
    price: "2 000",
    rating: 3,
    discount: 5,
  },
  {
    id: 2,
    text: "Стол из массива ореха ",
    price: "500 000",
    rating: 2,
    discount: null,
  },
  {
    id: 3,
    text: "Стол из массива ореха",
    price: "12 220 000",
    rating: 5,
    discount: 23,
  },
  {
    id: 4,
    text: "Стол из массива ореха",
    price: "20 000",
    rating: null,
    discount: null,
  },
  {
    id: 5,
    text: "Стол из массива ореха",
    price: "300 000",
    rating: null,
    discount: null,
  },
];

export const ChooseProductBy = () => {
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
    infinite: true,
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
              {sliderItems.map((item) => {
                return (
                  <div key={item.id} className="choose_product_by__slide">
                    {item.discount && (
                      <div className="choose_product_by__slide-discount">
                        {item.discount}% Скидка
                      </div>
                    )}
                    <div className="choose_product_by__slide-reting">
                      {item.rating && <Rating num={item.rating} />}
                    </div>
                    <p className="choose_product_by__slide-text">{item.text}</p>
                    <h5 className="choose_product_by__slide-price">
                      {item.price} сум
                    </h5>
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

import { Container } from "../../common_components/container/Container";

import Slider from "react-slick";

import { NextArrow } from "../../common_components/slider_arrow/NextArrow";
import { PrevArrow } from "../../common_components/slider_arrow/PrevArrow";
import { Rating } from "../../common_components/rating/Rating";

const sliderItems = [
  {
    id: 1,
    text: "Стул Oldem Дуб",
    price: "2 000",
    rating: 3,
    discount: 5,
    new: true,
  },
  {
    id: 2,
    text: "Стул Oldem Дуб",
    price: "500 000",
    rating: 2,
    discount: null,
    new: false,
  },
  {
    id: 3,
    text: "Стул Oldem Дуб",
    price: "12 220 000",
    rating: 5,
    discount: 23,
    new: true,
  },
  {
    id: 4,
    text: "Стул Oldem Дуб",
    price: "20 000",
    rating: null,
    discount: null,
    new: false,
  },
  {
    id: 5,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: false,
  },
  {
    id: 6,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
  },
  {
    id: 7,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
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
    <div className="sub_category">
      <Container>
        <div className="sub_category__inner">
          <div className="sub_category__top">
            <div className="sub_category__title_wrapper">
              <h2>ПОДКАТЕГОРИЯ</h2>
              <p>КАРТКОЕ НАЗВАНИЕ ИЛИ ОПИСАНИЕ</p>
            </div>
          </div>
          <div className="sub_category__slider">
            <Slider {...settings}>
              {sliderItems.map((slide) => {
                return (
                  <div className="sub_category__slide" key={slide.id}>
                    <div className="sub_category__slide_top">
                      {slide.discount && (
                        <div className="sub_category__slide_discount">
                          {slide.discount}% Скидка
                        </div>
                      )}
                      {slide.new && (
                        <div className="sub_category__slide_new">НОВИНКА</div>
                      )}
                      {slide.rating && (
                        <div className="sub_category__slide_rating">
                          <Rating num={slide.rating} />
                        </div>
                      )}
                    </div>
                    <div className="sub_category__slide_bottom">
                      <p>{slide.text}</p>
                      <h3>{slide.price} сум</h3>
                    </div>
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

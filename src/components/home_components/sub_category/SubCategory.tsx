import { Container } from "../../common_components/container/Container";

import Slider from "react-slick";

import { NextArrow } from "../../common_components/slider_arrow/NextArrow";
import { PrevArrow } from "../../common_components/slider_arrow/PrevArrow";
import { Rating } from "../../common_components/rating/Rating";
import { ProductCard } from "../../common_components/product_card/ProductCard";

import image from "../../../images/slide_examples/chair.jpg";

const sliderItems = [
  {
    id: 1,
    text: "Стул Oldem Дуб",
    price: "2 000",
    rating: 3,
    discount: 5,
    new: true,
    img: image,
  },
  {
    id: 2,
    text: "Стул Oldem Дуб",
    price: "500 000",
    rating: 2,
    discount: null,
    new: false,
    img: image,
  },
  {
    id: 3,
    text: "Стул Oldem Дуб",
    price: "12 220 000",
    rating: 5,
    discount: 23,
    new: true,
    img: image,
  },
  {
    id: 4,
    text: "Стул Oldem Дуб",
    price: "20 000",
    rating: null,
    discount: null,
    new: false,
    img: image,
  },
  {
    id: 5,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: false,
    img: image,
  },
  {
    id: 6,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
    img: image,
  },
  {
    id: 7,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
    img: image,
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
                  <ProductCard
                    key={slide.id}
                    discount={slide.discount}
                    isNew={slide.new}
                    rating={slide.rating}
                    text={slide.text}
                    price={slide.price}
                    width="small"
                    img={slide.img}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

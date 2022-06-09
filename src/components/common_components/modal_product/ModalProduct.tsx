import { FC, useState } from "react";
import Image from "next/image";

import { Container } from "../container/Container";
import { SeasonCountry } from "../season_country/SeasonCountry";
import { Rating } from "./../rating/Rating";
import { BreadCrumbs } from "../bread_crumbs/BreadCrumbs";

import Slider from "react-slick";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import favorite from "../../../images/icons/favorite.svg";
import favorite2 from "../../../images/icons/favorite2.svg";
import forum from "../../../images/icons/forum.svg";
import share from "../../../images/icons/share.svg";
import share2 from "../../../images/icons/share2.svg";
import compare from "../../../images/icons/compare.svg";
import exit from "../../../images/icons/exit.svg";

// fake
import country from "../../../images/fake_photo/HU.png";
import season from "../../../images/fake_photo/seasons.svg";
import balloon from "../../../images/fake_photo/balloon3.png";
import balloon2 from "../../../images/fake_photo/balloon2.png";

const NextModalArrow = (props: any) => {
  const { onClick, nextSlide, className } = props;
  const disabled = className.split(" ")[2];
  return (
    <div
      onClick={onClick}
      onMouseDown={nextSlide}
      className={`slider_modal_arrow slider_modal__arrow-next ${
        disabled ? "slider_modal__arrow_dis" : ""
      }`}
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevModalArrow = (props: any) => {
  const { onClick, prevSlide, className } = props;

  const disabled = className.split(" ")[2];
  return (
    <div
      onClick={onClick}
      onMouseDown={prevSlide}
      className={`slider_modal_arrow slider_modal__arrow-prev ${
        disabled ? "slider_modal__arrow_dis" : ""
      }`}
    >
      <RiArrowLeftSLine />
    </div>
  );
};

export const ModalProduct: FC = (): JSX.Element => {
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

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    infinite: false,
    nextArrow: <NextModalArrow nextSlide={nextSlide} />,
    prevArrow: <PrevModalArrow prevSlide={prevSlide} />,
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
    <div className="modal_product">
      <Container>
        <div className="modal_product_inner">
          <div className="modal_product_left">
            <div className="modal_product_left-social">
              <div className="modal_product_social_item">
                <Image src={favorite} alt="icon" width={24} height={24} />
                <span>{212}</span>
              </div>
              <div className="modal_product_social_item">
                <Image src={forum} alt="icon" width={24} height={24} />
                <span>{212}</span>
              </div>
              <div className="modal_product_social_item">
                <Image src={share} alt="icon" width={24} height={24} />
                <span>{212}</span>
              </div>
            </div>

            <div className="modal_product_slider_wrapper">
              <div className="modal_product_bigimage-wrapper">
                <Image
                  src={images[indexSlide].img}
                  alt="main slider image"
                  layout="fill"
                />
              </div>
              <Slider {...settings} className="modal_product_slider">
                {images.map((item, i) => (
                  <div
                    className={`modal_product_slide ${
                      i === indexSlide ? "modal_product_slide_active" : ""
                    }`}
                    key={item.id}
                  >
                    <div className="modal_product_slide_img_wrapper">
                      <Image
                        src={item.img}
                        alt="main slider image"
                        layout="fill"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="modal_product_right">
            <div className="modal_product_right-inner">
              <div className="modal_product_bread_crumbs">
                <BreadCrumbs
                  list={[{ id: 1, href: "/", text: "Каталог" }]}
                  last="Легковые"
                />
              </div>

              <h3 className="modal_product_title">
                Pirelli Cinturato P7 Verde All Season
              </h3>

              <p className="modal_product_size">225/55r17</p>

              <div className="modal_product_size_season_wrapper">
                <SeasonCountry text="Венгрия" img={country} big country />

                <SeasonCountry text="Всесезонные" img={season} big />
              </div>

              <div className="modal_product_rating-box">
                <Rating num={4} style="big" />
                <p>Оценки (12)</p>
              </div>

              <div className="modal_product_right-social">
                <div className="modal_product_social_item">
                  <Image src={share2} alt="icon" width={24} height={24} />{" "}
                  <span>поделиться</span>
                </div>
                <div className="modal_product_social_item">
                  <Image src={compare} alt="icon" width={24} height={24} />{" "}
                  <span>сравнить</span>
                </div>
                <div className="modal_product_social_item">
                  <Image src={favorite2} alt="icon" width={24} height={24} />{" "}
                  <span>в избранное</span>
                </div>
              </div>

              <div className="modal_product_text-wrapper">
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

              <h4 className="modal_product_price">
                <span>600 000 </span>
                500 000 сум
              </h4>

              <div className="modal_product_add_wrapper">
                <p className="modal_product_add_qty">Кол</p>

                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                <button type="button">В корзинку</button>

                <div className="modal_product_add_tottal">
                  <span>Всего на сумму:</span>
                  <p>500 000 сум</p>
                </div>
              </div>
            </div>
            <div className="modal_product_exit">
              <Image src={exit} alt="exit" layout="fill" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

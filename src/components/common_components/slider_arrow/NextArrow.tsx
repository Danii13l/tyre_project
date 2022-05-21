import Image from "next/image";

import arrows from "../../../images/slider/Pagination__navigation-slider.svg";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="slider_arrow slider_arrow-next">
      <Image src={arrows} alt="arrow next" />
    </div>
  );
};

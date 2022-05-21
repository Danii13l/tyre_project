import Image from "next/image";

import arrows from "../../../images/slider/Pagination__navigation-slider.svg";

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="slider_arrow slider_arrow-prev">
      <Image src={arrows} alt="arrow prev" />
    </div>
  );
};

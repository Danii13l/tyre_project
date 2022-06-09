import { FC } from "react";

import { LinkTo } from "../../common_components/link_to/LinkTo";
import { Container } from "../../common_components/container/Container";
import { Darkening } from "../../common_components/darkening/Darkening";

import styles from "./newProduct.module.scss";

interface newProductInt {
  id: number;
  href: string;
  img: string | StaticImageData;
  text: string;
}

import malibu from "../../../images/fake_photo/malibu.jpg";
import gentra from "../../../images/fake_photo/gentra.jpg";
import spark from "../../../images/fake_photo/spark.jpg";
import Image, { StaticImageData } from "next/image";

const newProductItems: newProductInt[] = [
  {
    id: 1,
    href: "#!",
    img: malibu,
    text: "MALIBU",
  },
  {
    id: 2,
    href: "#!",
    img: gentra,
    text: "GENTRA",
  },
  {
    id: 3,
    href: "#!",
    img: spark,
    text: "SPARK",
  },
];

export const NewProduct: FC = (): JSX.Element => {
  return (
    <div className={styles.new_product}>
      <Container>
        <div className={styles.new_product_inner}>
          {newProductItems.map(({ id, href, img, text }) => {
            return (
              <div key={id} className={styles.new_product_item}>
                <LinkTo href="#!" text={text} y="small" x="right" />
                <div className={styles.new_product_img_wrapper}>
                  <Image src={img} alt="car" layout="fill" objectFit="cover" />
                </div>
                <Darkening />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

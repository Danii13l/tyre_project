import { Container } from "../container/Container";
import styles from "./subSection.module.scss";

import fakeImg from "../../../images/fake_photo/balloon2.png";

import { SubProduct } from "../sub_product/SubProduct";

interface subSectionInt {
  title: string;
}

const fakeData = [
  {
    id: 1,
    img: fakeImg,
    title: "Wonderland BS28",
    size: "225/55R17",
    oldPrice: "140 000 000",
    newPrice: "110 000 000",
  },
  {
    id: 2,
    img: fakeImg,
    title: "Wonderland BS28",
    size: "225/55R17",
    oldPrice: "140 000 000",
    newPrice: "110 000 000",
  },
  {
    id: 3,
    img: fakeImg,
    title: "Wonderland BS28",
    size: "225/55R17",
    oldPrice: "140 000 000",
    newPrice: "110 000 000",
  },
  {
    id: 4,
    img: fakeImg,
    title: "Wonderland BS28",
    size: "225/55R17",
    oldPrice: "140 000 000",
    newPrice: "110 000 000",
  },
];

export const SubSection = ({ title }: subSectionInt) => {
  return (
    <div>
      <Container>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.inner}>
          {fakeData.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <SubProduct {...item} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

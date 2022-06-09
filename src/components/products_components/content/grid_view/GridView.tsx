import { BigCard } from "../../../common_components/big_card/BigCard";

import styles from "./girdView.module.scss";

// fake
import hg from "../../../../images/fake_photo/HU.png";
import balloon2 from "../../../../images/fake_photo/balloon2.png";
import season from "../../../../images/fake_photo/seasons.svg";

const fakeData = [
  {
    id: 1,
    title: "Pirelli Scorpion Verde All Season",
    size: "235/55 R17",
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
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
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
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
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
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
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
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
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
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
    countryImg: hg,
    countryName: "Венгрия",
    seasonName: "Всесезонные",
    seasonImg: season,
    discount: 23,
    isNew: true,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
  },
];

export const GridView = ({ data }: any) => {
  return (
    <div className={styles.grid}>
      {fakeData.map((item: any) => (
        <BigCard key={item.id} {...item} />
      ))}
    </div>
  );
};

import { FC, useState } from "react";

import { GridView } from "./grid_view/GridView";
import { ListView } from "./list_view/ListView";

// fake
import hg from "../../../images/fake_photo/HU.png";
import balloon2 from "../../../images/fake_photo/balloon2.png";
import season from "../../../images/fake_photo/seasons.svg";
import { Controller } from "./controller/Controller";

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
    oldPrice: "200 000",
    newPrice: "100 000",
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
    isNew: true,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
    oldPrice: "200 000",
    newPrice: "100 000",
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
    oldPrice: "200 000",
    newPrice: "100 000",
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
    oldPrice: "200 000",
    newPrice: "100 000",
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
    isNew: false,
    mainImg: balloon2,
    rating: 3,
    price: "2 500 000",
    oldPrice: "200 000",
    newPrice: "100 000",
  },
  {
    id: 6,
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
    oldPrice: "200 000",
    newPrice: "100 000",
  },
  {
    id: 7,
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
    oldPrice: "200 000",
    newPrice: "100 000",
  },
  {
    id: 8,
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
    oldPrice: "200 000",
    newPrice: "100 000",
  },
];

export const ContentProducts: FC = (): JSX.Element => {
  const [view, setView] = useState<boolean>(true);

  const handleView = (val: boolean): (() => void) => {
    return () => setView(val);
  };

  return (
    <>
      <Controller handleView={handleView} />
      {view ? <GridView data={fakeData} /> : <ListView data={fakeData} />}
    </>
  );
};

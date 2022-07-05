import { FC } from "react";

import { BigCard } from "../../../common_components/big_card/BigCard";

import styles from "./girdView.module.scss";

export const GridView: FC<any> = ({ data }): JSX.Element => {
  return (
    <div className={styles.grid}>
      {data.map((item: any) => (
        <BigCard key={item.id} {...item} />
      ))}
    </div>
  );
};

import { BigCard } from "../../../common_components/big_card/BigCard";

import styles from "./girdView.module.scss";

export const GridView = ({ data }: any) => {
  return (
    <div className={styles.grid}>
      {data.map((item: any) => (
        <BigCard key={item.id} {...item} />
      ))}
    </div>
  );
};

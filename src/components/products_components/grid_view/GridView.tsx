import { ProductCard } from "../../common_components/product_card/ProductCard";
import styles from "./girdView.module.scss";

export const GridView = ({ data }: any) => {
  return (
    <div className={styles.grid}>
      {data.map((item: any) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

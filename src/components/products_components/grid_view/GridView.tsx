import styles from "./girdView.module.scss";

export const GridView = ({ data }: any) => {
  return <div className={styles.grid}>{data.map((item: any) => 1)}</div>;
};

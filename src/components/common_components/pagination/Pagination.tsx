import Image from "next/image";
import styles from "./pagination.module.scss";

import slash from "../../../images/common/pagination_slash.svg";

export const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <p className={styles.pagination_show}>Отобразить </p>
      <span className={styles.active}>9</span>
      <span>
        <Image src={slash} alt="icon" />
      </span>
      <span>18</span>
      <span>
        <Image src={slash} alt="icon" />
      </span>
      <span>27</span>
      <span>
        <Image src={slash} alt="icon" />
      </span>
      <span>Все</span>
    </div>
  );
};

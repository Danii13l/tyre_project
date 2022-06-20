import styles from "./topAdmin.module.scss";
import Image from "next/image";
import { FC } from "react";

export const TopAdmin: FC = (): JSX.Element => {
  return (
    <div className={styles.top}>
      <div className={styles.user_wrapper}>
        <div className={styles.img_wrapper}>
          <Image src="/avatar.png" alt="avatar" layout="fill" />
        </div>
        <h5>User</h5>
      </div>

      <button className={styles.exit}>Выйти</button>
    </div>
  );
};

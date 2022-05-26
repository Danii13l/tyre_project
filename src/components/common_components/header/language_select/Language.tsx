import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./language.module.scss";
import Image from "next/image";
import Link from "next/link";

import arrow from "../../../../images/navbar/select_arrow.svg";

export const Language = () => {
  const router = useRouter();
  const t = router.locale === "ru" ? "ru" : "uz"; //пока string
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(router.locale as string);

  return (
    <div className={styles.selectBlock}>
      <div
        className={styles.selectHead}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected === "ru" ? "Ру" : "Uz"}
        <div className={styles.selectIcon}>
          <Image
            src={arrow}
            alt="arrowIcon"
            layout="fill"
            className={styles.iconArrow}
          />
        </div>
        <span className={styles.selectCurrent} />
      </div>
      {isActive && (
        <div className={styles.selectBody}>
          <div className={styles.selectItem}>
            <Link href="" locale={selected === "ru" ? "uz" : "ru"}>
              <a
                onClick={(e) => {
                  setSelected(selected === "ru" ? "uz" : "ru");
                  setIsActive(false);
                }}
                className={styles.lang_text}
              >
                {selected === "ru" ? "Uz" : "Ру"}
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

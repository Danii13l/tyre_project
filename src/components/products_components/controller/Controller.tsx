import { BreadCrumbs } from "../../common_components/bread_crumbs/BreadCrumbs";

import styles from "./controller.module.scss";

import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";

export const Controller = () => {
  return (
    <div className={styles.controller}>
      <div className={styles.controller_bread_crumbs}>
        <BreadCrumbs
          list={[{ id: 1, href: "/", text: "Home" }]}
          last="Products"
        />
      </div>

      <div className={styles.controller_sort_wrapper}>
        <select>
          <option>ASC</option>
          <option>DSC</option>
          <option>Price</option>
        </select>

        <div className={styles.controller_view}>
          <div className={styles.controller_view_item}>
            <BsGrid3X3Gap />
          </div>
          <div className={styles.controller_view_item}>
            <BsListUl />
          </div>
        </div>
      </div>
    </div>
  );
};

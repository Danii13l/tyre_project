import { NextPage } from "next";

import { TopAdmin } from "../src/components/admin/top/TopAdmin";
import { AsideAdmin } from "./../src/components/admin/aside/asideAdmin";

import styles from "../styles/pages/admin/admin.module.scss";

const Admin: NextPage = (): JSX.Element => {
  return (
    <div className={styles.admin}>
      <AsideAdmin />
      <div className={styles.admin_right}>
        <TopAdmin />
      </div>
    </div>
  );
};

export default Admin;

import { TopAdmin } from "../src/components/admin/top/TopAdmin";
import styles from "../styles/pages/admin/admin.module.scss";
import { AsideAdmin } from "./../src/components/admin/aside/asideAdmin";

const Admin = () => {
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

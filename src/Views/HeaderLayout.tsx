import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./wrap.module.scss"

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HeaderLayout;

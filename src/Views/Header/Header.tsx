import { Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header + " mb-5 mt-1 row"}>
      <div className={" col-3 d-flex justify-content-center align-self-center"}>
        MY AUTO MIR
      </div>
      <div
        className={
          styles.search +
          " col-6 d-flex inputGroup-sizing-default justify-content-sm align-self-center"
        }
      >
        <i className={"fa " + styles["fa-search"]}></i>
        <input type="text" className="search-input form-control" />
      </div>
      <div className="col-3 row d-flex justify-content-end align-content-center">
        <Link to="/login" className="login col-3">
          Войти
        </Link>
        <Link to="/registration" className="signup col-6">
          Зарегистрироваться
        </Link>
      </div>
    </header>
  );
}

export default Header;

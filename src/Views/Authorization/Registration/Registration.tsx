import {
  faGithub,
  faGoogle,
  faVk,
  faYandex,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import styles from "./registration.module.scss";

export const RegistrationPage = () => {
  return (
    <div className={styles.card}>
      <div className="card-head bg-white d-flex flex-column space-around">
        <p className="m-0 text-center mt-3 mb-2">Зарегистрируйтесь с помощью</p>
        <div className="d-flex align-items-center justify-content-center gap-4">
          <Button variant="light github">
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button variant="light google">
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
          <Button variant="light yandex">
            <FontAwesomeIcon icon={faYandex} />
          </Button>
          <Button variant="light vk">
            <FontAwesomeIcon icon={faVk} />
          </Button>
        </div>
      </div>
      <div className={styles["card-form"]}>
        <p className="text-center text-muted fs-08 mt-3 mb-4">
          Или продолжите с помощью почты
        </p>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="text"
            placeholder="Имя"
            className={styles["form-control"]}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            className={styles["form-control"]}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="tel"
            placeholder="Номер телефона"
            className={styles["form-control"]}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="email"
            placeholder="Email"
            className={styles["form-control"]}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="password"
            placeholder="Пароль"
            className={styles["form-control"]}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className={styles["form-control"]}
            required
          />
        </div>
        <div className="d-flex align-items-center mb-4">
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-muted ms-2">Запомнить меня</label>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login">
            <Button variant="secondary">Войти</Button>
          </Link>
          <Button variant="primary">Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  );
};
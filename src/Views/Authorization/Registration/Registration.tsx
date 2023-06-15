import {
  faGoogle,
  faVk,
  faYandex,
} from "@fortawesome/free-brands-svg-icons";
import { Button, ButtonGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./modal.css"
import styles from "./registration.module.scss";
import { useEffect, useState } from "react";
import { UserService } from "../../../Services/UserService";
import { RegisterUserModel } from "../../../Models/User/RegisterUser";
import { ApplicationRoutes } from "../../../RoutesConstants";
import { MDBSwitch } from "mdb-react-ui-kit";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Popup from "reactjs-popup";

export const RegistrationPage = () => {
  const [isUserAgrChecked, setUserAgrChecked] = useState(false);
  const [modalIsOpen, setModalState] = useState(false);
  const [remember, setRemember] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");

  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    if (password !== passwordValidate) {
      alert("Пароли должны совпадать");
    }
    const registerUser: RegisterUserModel = {
      $type: "PasswordRegistration",
      name: name,
      secondName: secondName,
      phone: phone,
      password: password,
      email: email,
    };

    const state = await UserService.RegisterUser(registerUser);
    if (state === undefined) {
      navigate(ApplicationRoutes.HomePage);
    } else {
      alert(state);
    }
  };

  const [useArgeement, setUserAgg] = useState("");

  const getUserAgreementFile = async () => {
    // prefix public dir files with `process.env.PUBLIC_URL`
    // see https://create-react-app.dev/docs/using-the-public-folder/
    const res = await fetch(`/UserAgreement.md`);
  
    if (!res.ok) {
      throw res;
    }
    const text = await res.text();
    setUserAgg(text);
  };


  useEffect(() => {
    getUserAgreementFile();
  }, [useArgeement])

  return (
    <div className={styles.card}>
      <div className="card-head bg-white d-flex flex-column space-around">
        <p className="m-0 text-center mt-3 mb-2">Зарегистрируйтесь с помощью</p>
        <div className="d-flex align-items-center justify-content-center gap-4">
          <Button variant="light google">
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
          <Button variant="light yandex"
          onClick={() => window.location.replace("https://oauth.yandex.ru/authorize?response_type=code&client_id=30fea16c13b94db1a69857eb5e150fa1")}>
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
            onChange={(evt) => setName(evt.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            className={styles["form-control"]}
            onChange={(evt) => setSecondName(evt.target.value)}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="tel"
            placeholder="Номер телефона"
            className={styles["form-control"]}
            onChange={(evt) => setPhone(evt.target.value)}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="email"
            placeholder="Email"
            className={styles["form-control"]}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="password"
            placeholder="Пароль"
            className={styles["form-control"]}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </div>
        <div className={styles["input-field"] + " d-flex align-items-center"}>
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className={styles["form-control"]}
            onChange={(evt) => setPasswordValidate(evt.target.value)}
            required
          />
        </div>
        <div className="d-flex align-items-center mb-4">
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-muted ms-2">Запомнить меня</label>
        </div>
        <ButtonGroup className="mb-2">
          <MDBSwitch
            value="isUserArgChecked"
            label={
              <div>
                Согласие с{" "}
                <div className={styles["user-agreement"]} onClick={() => setModalState(true)}>
                  пользовательским соглашением
                </div>
              </div>
            }
            onClick={() => setUserAgrChecked(!isUserAgrChecked)}
          />
        </ButtonGroup>
        <div className="d-flex justify-content-center gap-3">
          <Link to={ApplicationRoutes.LoginPage}>
            <Button variant="secondary">Войти</Button>
          </Link>
          <Button variant="primary" onClick={registerUser}>
            Зарегистрироваться
          </Button>
        </div>
      </div>

      <Popup
      modal
      nested
        open={modalIsOpen}
        onClose={() => setModalState(false)}
      >
         <button className="close" onClick={() => setModalState(false)}>
          &times;
        </button>
        <ReactMarkdown children={useArgeement}/>
      </Popup>
    </div>
  );
};

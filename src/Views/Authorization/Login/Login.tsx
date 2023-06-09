import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faVk, faYandex } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import styles from "./login.module.scss";
import { ChangeEvent, useState } from "react";
import { UserService } from "../../../Services/UserService";
import { LoginUserModel } from "../../../Models/User/LoginUser";
import { ApplicationRoutes } from "../../../RoutesConstants";
import { useCookies } from "react-cookie";

export const LoginPage = () => {
  const [emailError, setEmailError] = useState<boolean>()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const loginUser = async () => {
    if (emailError === true )  {
      return false;
    }
    const userCred: LoginUserModel = {
      $type: "PasswordLoginDto",
      email: email,
      password: password, 
    } 

    const state = await UserService.LoginUser(userCred);
    if (state === undefined) {
      navigate(ApplicationRoutes.HomePage)
    }
    else {
      alert(state)
    }
  }

  const isValidEmail = (email: string) =>  {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    setEmail(event.target.value);
  };

  return (
    <div className={styles.card}>
      <div className="card-head bg-white d-flex flex-column space-around">
        <p className="m-0 text-center mt-3 mb-2">Войти с помощью</p>
        <div className="d-flex align-items-center justify-content-center gap-4">
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
        <p className="text-center text-muted fs-08 mt-3 mb-3">
          Или войдите с помощью почты
        </p>
        <div className={styles["input-field"] + " d-flex align-items-center"  + (emailError ? " error" : "")}>
          <input
            type="email"
            placeholder="Email"
            className={styles["form-control"]}
            onChange={handleChange}
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
        <div className="d-flex align-items-center mb-4">
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-muted ms-2">Запомнить меня</label>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <Link to={ApplicationRoutes.RegisterPage}>
            <Button variant="secondary">Зарегистрироваться</Button>
          </Link>
          <Button variant="primary" onClick={loginUser}>
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

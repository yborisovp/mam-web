import { LoginPage } from "./Login/Login";
import { RegistrationPage } from "./Registration/Registration";

import styles from "./authorization.module.scss";

export type AuthorizationPageType = {
  isLogin: boolean;
};

export const AuthorizationPage = ({
  isLogin = false,
}: AuthorizationPageType) => {
  return (
    <div className={styles.body}>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="content row">
          <div className="header col ">
            <div className="h3 align-self-top">Мой Авто Мир</div>
            <div className={styles.text}>
              Откройте для себя новый спосооб искать
              <span> автомобили</span>
            </div>
          </div>
          <div className="form-card col">
            {isLogin ? <LoginPage /> : <RegistrationPage />}
          </div>
        </div>
      </div>
    </div>
  );
};

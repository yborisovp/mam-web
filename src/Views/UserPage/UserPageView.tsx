import { useEffect, useState } from "react";
import { UserModel } from "../../Models/User/IUser";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./user.scss";

export const UserPageView = () => {
  const [user, setUser] = useState<UserModel>();

  const navigate = useNavigate();

  useEffect(() => {
    const result = localStorage.getItem("user");

    if (result != null) {
      const user: UserModel = JSON.parse(result);
      setUser(user);
    }
  }, []);

  const items = () => {
    return (
      <div className="col-9 p-0">
        <div className="container pt-2">
          <div className="card p-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <a href="Individual-post.html">
                  <img
                    className="rounded object-fit-cover w-100 h-100"
                    src="images/Car-2.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className="col-7">
                <div className="row">
                  <p className="h3 col-8">Porsche Panamera, 2023</p>
                  <p className="h3 col-5">4 500 000 ₽</p>
                  <p className="h6 pt-3 text-color-demigray">Фиговина</p>
                  <div className="col-12 pt-1 crop-text-user card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    blanditiis dolore, consequatur explicabo voluptatem officiis
                    facilis nostrum sequi sed! Doloremque possimus quo alias
                    maiores voluptatum illum eius commodi accusantium ipsam
                    animi beatae aspernatur architecto mollitia, eaque quibusdam
                    dignissimos expedita enim dicta assumenda laudantium earum
                    molestiae. Cum at sunt necessitatibus maxime? Id in mollitia
                    hic similique nostrum nesciunt nisi, enim qui et vero
                    repellat deleniti ipsa aperiam error pariatur ipsum illo
                    blanditiis architecto expedita impedit consequatur.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container container-main">
      <div className="row justify-content-between">
        <div className="col-5 mb-3 mt-4 p-0">
          <Button variant="secondary" className="me-2">Мои объявления</Button>
          <Button variant="secondary">Избранные объявления</Button>
        </div>
        <div className="col-9 p-0 d-flex flex-column gap-2">
            <span>У вас пока нет постов</span>
            <Button variant="outline-primary" onClick={() => navigate("/create")}>
                Создать пост!
            </Button>
        </div>
        <div className="col-3 mt-2">
          <div className="card p-0 m-0">
            <div className="row mt-2 p-2 pb-0">
              <div className="col-4">
                <img
                  src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                  alt=""
                  className="rounded-circle w-100"
                />
              </div>
              <div className="col-8">
                <p className="h5">{user?.fullName}</p>
                <p className="h6 text-color-demigray">
                  Последний вход{" "}
                  {user !== undefined
                    ? new Date(user.lastEnteredAt).toLocaleString()
                    : ""}
                </p>
              </div>
            </div>
            <hr className="pt-0" />
            <p className="h6 ps-2 text-color-demigray">
              Дата регистрации: {user !== undefined
                    ? new Date(user.registrationDate).toLocaleDateString()
                    : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

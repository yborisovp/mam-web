import { useEffect, useState } from "react";
import { UserModel } from "../../Models/User/IUser";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./user.scss";
import { SellItemService } from "../../Services/SellItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";
import { IndividualPostView } from "../IndivivdualPost/IndividualPostView";
import { CookieService } from "../../Services/CookieDecoderService";
import { CookiesConstants } from "../CookiesConstants";
import { ApplicationRoutes } from "../../RoutesConstants";

import { UserService } from "../../Services/UserService";
import DealsView from "./Deals/Deals";
import { DealUIModel } from "../../Models/Deal";
import { DealService } from "../../Services/DealService";

export const UserPageView = () => {
  const [user, setUser] = useState<UserModel>();
  const [currentPage, setCurrentPage] = useState<"my" | "deal" | "reports">(
    "my"
  );
  const [items, setUserItems] = useState<SellItemModel[]>();

  const navigate = useNavigate();

  useEffect(() => {
    if (CookieService.CheckCookie(CookiesConstants.UserCookie)) {
      const newUser = CookieService.DecodeCookie<UserModel>(
        CookiesConstants.UserCookie
      );
      setUser(newUser);
    }
  }, []);

  useEffect(() => {
    getUserItems();
  }, []);

  const getUserItems = async () => {
    const items = await SellItemService.GetAllByUserId();
    setUserItems(items);
  };

  const logoutUser = async () => {
    await UserService.LogoutUser();
    navigate(ApplicationRoutes.HomePage);
  };

  const [deals, setDeals] = useState<DealUIModel[]>();

  useEffect(() => {
    getDeals();
  }, []);

  const getDeals = async () => {
    const d = await DealService.GetAllDealsByCurrentUser();
    setDeals(d);
    console.log(d);
  };

  function makeDeal(): void {
    alert("Сделка ссовершена");
  }

  return (
    <div className="container container-main">
      <div className="row justify-content-between">
        <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none col-12 mt-0">
          <div className="card p-0 m-0">
            <div className="d-flex mt-2 p-2 pb-0">
              <div className="me-4">
                <img
                  src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                  alt=""
                  className="rounded-circle img-prof"
                />
              </div>
              <div className="">
                {/* <p className="h5">{user?.fullName}</p> */}
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
            <p className="h6 ps-2 text-color-demigray mb-3">
              Дата регистрации:{" "}
              {user !== undefined
                ? new Date(user.registrationDate).toLocaleDateString()
                : ""}
            </p>
          </div>
        </div>
        <div className="col-12 p-2 d-flex d-sm-flex d-md-none d-lg-none d-xl-none mt-2 justify-content-between ">
          <Button
            variant="secondary"
            className="w-100 me-1"
            onClick={() => setCurrentPage("my")}
          >
            Мои объявления
          </Button>
          <Button
            variant="secondary"
            className="w-100 ms-1"
            onClick={() => setCurrentPage("deal")}
          >
            Сделки
          </Button>
          {user?.role === "Admin" ? (
            <>
              <Button
                variant="secondary"
                className="w-100 ms-1"
                onClick={() => navigate(ApplicationRoutes.AdminPanel)}
              >
                Жалобы на объявления
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="col-12 p-2 d-none d-sm-none d-md-flex d-lg -flex d-xl-flex mt-2 ">
          <Button
            variant="secondary"
            className="ms-1"
            onClick={() => setCurrentPage("my")}
          >
            Мои объявления
          </Button>
          <Button
            variant="secondary"
            className="ms-1"
            onClick={() => setCurrentPage("deal")}
          >
            Сделки
          </Button>
          {user?.role === "Admin" ? (
            <>
              <Button
                variant="secondary"
                className="ms-1"
                onClick={() => navigate(ApplicationRoutes.AdminPanel)}
              >
                Панель админисстратора
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 p-2 d-flex flex-column gap-2">
          {currentPage === "my" ? (
            <>
              {items !== undefined && items.length !== 0 ? (
                <IndividualPostView items={items} />
              ) : (
                <Button
                  variant="outline-primary"
                  onClick={() => navigate("/create")}
                >
                  Создать пост!
                </Button>
              )}
            </>
          ) : (
            <>
              {deals?.map((el) => (
                <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 mx-auto">
                  <div className="container d-flex flex-column gap-2 p-2 pt-2">
                    <div className="card p-4 mb-2 border">
                      <div className="row">
                        <div className="row pe-0">
                          <p className="h4 col-8 mt-md-2 mt-2 mt-sm-2 mt-lg-0 mt-xl-0 col">
                            Пользователь {el.buyerUser?.fullName} предлагает вам
                            сделку
                          </p>
                          <Button
                            className="col btn-ok"
                            variant="outline-secondary"
                            onClick={() => makeDeal()}
                          >
                            Согласиться
                          </Button>
                          <Button
                            className="ms-2 col btn-no"
                            variant="outline-secondary"
                          >
                            Отказаться
                          </Button>
                        </div>
                        <hr className="mt-3 mb-3" />
                        <IndividualPostView items={[el.sellItem]} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block col-3 mt-0">
          <div className="card p-0 m-0">
            <div className="row mt-2 p-2 pb-0">
              <div className="col-4">
                <img
                  src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                  alt=""
                  className="rounded-circle img-prof"
                />
              </div>
              <div className="col-8">
                {/* <p className="h5">{user?.fullName}</p> */}
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
              Дата регистрации:{" "}
              {user !== undefined
                ? new Date(user.registrationDate).toLocaleDateString()
                : ""}
            </p>
          </div>
          <Button className="mt-3" onClick={() => logoutUser()}>
            Выйти
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Button, Carousel } from "react-bootstrap";
import styles from "./item.module.scss";
import { YMaps } from "react-yandex-maps";
import { Fragment, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SellItemService } from "../../Services/SellItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";
import { LocalizationService } from "../../Services/Localization/LocalizationService";
import { DateTime } from "ts-luxon";
import MDEditor from "@uiw/react-md-editor";
import { DealService } from "../../Services/DealService";
import { CookieService } from "../../Services/CookieDecoderService";
import { CookiesConstants } from "../CookiesConstants";
import { UserModel } from "../../Models/User/IUser";
import { ReportService } from "../../Services/ReportServices";
import { ApplicationRoutes } from "../../RoutesConstants";

export const ItemView = () => {
  const [item, setItem] = useState<SellItemModel>();
  const [index, setIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState<UserModel>();
  const [modalIsOpen, setModalState] = useState(false);

  const [searchParams] = useSearchParams();

  const GetItemById = async (id: string) => {
    const newItem = await SellItemService.GetById(id, true);
    setItem(newItem);
  };
  useEffect(() => {
    if (CookieService.CheckCookie(CookiesConstants.UserCookie)) {
      const user = CookieService.DecodeCookie<UserModel>(
        CookiesConstants.UserCookie
      )
      setCurrentUser(user);  
    }
    const id = searchParams.get("id");
    if (id == null) {
      console.error("cannot get id from location");
    } else {
      GetItemById(id);
    }
  }, [searchParams]);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const makeDeal = async () => {
    if (CookieService.CheckCookie(CookiesConstants.UserCookie)) {
      if (item?.owner) {
        const user = CookieService.DecodeCookie<UserModel>(
          CookiesConstants.UserCookie
        );
        const state = await DealService.CreateDeal({
          ownerUserId: item.owner.id,
          buyerUserId: user.id,
          sellItemId: item.id,
        });
        if (state) {
          alert("Сообщение о сделке отпарвлено ползователю");
        } else {
          alert("Сделка не возможна. Вероятно товар уже продан");
        }
      }else {
        alert("Чтобы заключать сделики - зарегистрируйтесь!")
      }

    } else {
      alert("Авторизуйтесь, чтобы совершить сделку");
    }
  };

  const [reportText, setReportText] = useState("");
  const navigator = useNavigate();
  const  createReport = async () => {
    if (item !== undefined) {
      const state = await ReportService.CreateReport(item?.id, reportText);
      if (state){
        navigator(ApplicationRoutes.HomePage);
      }
      else {
        alert("Неудалось создат запрос на создание нарушения. Попробуйте снова" )
      }
    }
    alert("невозможно отправить отчет, попробуйте снова");
    
  }

  return (
    <div
      className={
        styles.body + " d-flex justify-content-center align-items-center"
      }
    >
      <div className={styles.container + " container mt-4 mb-3"}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4 rounded-2">
            <Carousel
              fade
              className={
                styles.sticky +
                " mb-4 w-100 shadow-1-strong rounded-2 align-self-center sticky-top"
              }
              activeIndex={index}
              onSelect={handleSelect}
            >
              {item?.files.map((el) => (
                <Carousel.Item key={el.filePath} className="rounded-2">
                <div className={styles["img-container"] + " rounded-1"}>
                  <img
                    src={el.filePath}
                    className="mx-auto rounded-2 d-block"
                    alt="..."
                  />
                </div>
              </Carousel.Item>))}
              {/* <Carousel.Item className="rounded-2">
                <div className={styles["img-container"] + " rounded-1"}>
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
                    className="mx-auto rounded-2 d-block"
                    alt="..."
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item className="rounded-2">
                <div className={styles["img-container"] + " rounded-1"}>
                  <img
                    src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                    className="mx-auto rounded-2 d-block"
                    alt="..."
                  />
                </div>
              </Carousel.Item> */}
            </Carousel>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-0">
            <div className={styles["card-main"] + " card p-3 pt-0 mb-3 "}>
              <div className="row mx-0">
                <div className="col-12 p-0">
                  <div className="d-flex justify-content-between">
                    <h3 className={styles["item-title"] + "mb-2 m-0"}>
                      {item?.title}
                    </h3>

                    <h4 className={styles["item-title"] + "mb-2 m-0"}>
                      {item?.price} ₽
                    </h4>
                    {currentUser?.id === item?.owner?.id? (<></>) : (<FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faFlag}
                      onClick={() => setModalState(true)}
                    />)}
                    
                  </div>

                  <h6 className="mb-0 font-monospace text-color-demigray"></h6>
                </div>
              </div>
            </div>
            <div className={styles["card-main"] + " card p-3 mb-3"}>
              <h5 className="text-w-600">Общая информация</h5>
              <div className="row mt-3">
                <div className="d-flex flex-column">
                  {item?.attributes.map((el) => {
                    return (
                      <Fragment key={el.key}>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mt-2 text-color-demigray">
                            {LocalizationService.LocalizeCarAdditionalAttributes(
                              el.key
                            )}
                          </p>
                          <p className="text-end mt-2">
                            {el.key === "Year".toLowerCase()
                              ? DateTime.fromISO(el.value).toFormat(
                                  "MMMM d, yyyy"
                                )
                              : el.value}
                          </p>
                        </div>
                        <hr className="mt-1 w-100" />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              data-color-mode="light"
              className={styles["card-main"] + " card p-3 mb-3"}
            >
              <h5 className="text-w-600">Описание</h5>

              <MDEditor.Markdown
                source={item?.description}
                style={{ whiteSpace: "pre-wrap" }}
              />
            </div>

            <div className=" card p-3 sticky-top">
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                    alt=""
                    className={styles["img-prof"] + " rounded-circle"}
                  />
                </div>
                <div className="col-4">
                  <p className="m-0 text-color-demigray">Продавец</p>
                  <h5>{item?.owner?.fullName}</h5>
                </div>
                {currentUser?.id === undefined ? (<></>) : currentUser?.id === item?.owner?.id? (<></>) : (<div className="col-3 ">
                  <Button onClick={() => makeDeal()}>
                    Договориться о сделке
                  </Button>
                </div>)}
                <div className="col-3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup
        modal
        nested
        className="short"
        open={modalIsOpen}
        onClose={() => setModalState(false)}
      >
        <button className="close" onClick={() => setModalState(false)}>
          &times;
        </button>
        <span>Пожалуйста, опишите проблему</span>
        <textarea className="form-control" rows={3} onChange={(e) => setReportText(e.target.value)}></textarea>
        <Button onClick={() => createReport()}>Отправить</Button>
      </Popup>
    </div>
  );
};

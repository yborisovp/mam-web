import { Button, Carousel } from "react-bootstrap";
import styles from "./item.module.scss";
import { YMaps } from "react-yandex-maps";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

export const ItemView = () => {
  const [index, setIndex] = useState(0);
  const [modalIsOpen, setModalState] = useState(false);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  const t = `## Тойота Витц 2017 года выпуска
это компактный и надежный хэтчбек, который идеально подойдет для городской езды. Автомобиль находится в прекрасном состоянии и имеет пробег всего 30 тысяч километров.
   
__Характеристики__

Двигатель: Бензиновый 4-цилиндровый двигатель объемом 1,3 литра

__Мощность__: 99 л.с.

Коробка передач: Автоматическая коробка передач

Привод: Передний привод

Расход топлива: 5,5 литров на 100 км

Особенности
Комфортный и просторный салон

Современные технологии, включая систему мультимедиа и Bluetooth

Высокий уровень надежности и безопасности

Компактный размер, идеально подходящий для городской езды

Внешний вид

Toyota Vitz 2017 выглядит элегантно и стильно, со строгими линиями и динамичным дизайном. Этот автомобиль привлекает взгляды на дороге и отлично подходит для тех, кто ценит комфорт, стиль и компактность.
   
__Если вы ищете надежный, компактный и стильный автомобиль для городской езды, то Toyota Vitz 2017 - отличный выбор. Свяжитесь с нами, чтобы узнать больше о этом автомобиле и возможных вариантах приобретения.__`;
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
              <Carousel.Item className="rounded-2">
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
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-0">
            <div className={styles["card-main"] + " card p-3 pt-0 mb-3 "}>
              <div className="row mx-0">
                <div className="col-12 p-0">
                  <div className="d-flex justify-content-between">
                    <h3 className={styles["item-title"] + "mb-2 m-0"}>
                      Toyota Vitz, 2017 год
                    </h3>

                    <h4 className={styles["item-title"] + "mb-2 m-0"}>
                      4 500 000 ₽
                    </h4>
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faFlag}
                      onClick={() => setModalState(true)}
                    />
                  </div>

                  <h6 className="mb-0 font-monospace text-color-demigray">
                    24 марта № 1118483189
                  </h6>
                </div>
              </div>
            </div>
            <div className={styles["card-main"] + " card p-3 mb-3"}>
              <h5 className="text-w-600">Общая информация</h5>
              <div className="row mt-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between">
                    <p className="mt-2 text-color-demigray">Состояние</p>
                    <p className="text-end mt-2">Не битый</p>
                  </div>
                  <hr className="mt-1 w-100" />
                </div>
              </div>
            </div>
            <div className={styles["card-main"] + " card p-3 mb-3"}>
              <h5 className="text-w-600">Описание</h5>
              {/* <p className={styles["text-main"] + " mt-2"}>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Incidunt minus recusandae eius saepe ab fugit delectus illum
                                alias? Laudantium consequuntur fuga corporis deserunt
                                dignissimos, excepturi alias necessitatibus! Eligendi odit,
                                velit deleniti aliquid hic debitis quisquam temporibus tenetur
                                maxime veniam a dolorem tempore fuga. Maxime blanditiis nobis
                                debitis odit alias nemo quas sequi facere. Consectetur aliquid,
                                perspiciatis maxime sint doloribus inventore quaerat rerum cum
                                tempora facere rem nulla earum aut, aspernatur culpa accusamus
                                sequi unde, itaque nobis obcaecati incidunt voluptate nesciunt
                                architecto minus! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Incidunt minus recusandae eius saepe ab fugit
                                delectus illum alias? Laudantium consequuntur fuga corporis
                                deserunt dignissimos, excepturi alias necessitatibus! Eligendi
                                odit, velit deleniti aliquam aliquid eligendi assumenda
                                sapiente. Aperiam praesentium facere sunt inventore, odit
                                tempore nihil quaerat, eaque porro sint quae adipisci ab. At
                                voluptas sint necessitatibus temporibus iusto, nobis ipsum odit
                                eum fugiat quisquam voluptatum molestias nostrum accusamus
                                magni, ab quas saepe eos neque tempore consequatur aliquam alias
                                quod. Molestias eveniet sequi unde, itaque nobis obcaecati
                                incidunt voluptate nesciunt architecto minus! Lorem ipsum dolor
                                sit amet consectetur, adipisicing elit. Incidunt minus
                                recusandae eius saepe ab fugit delectus illum alias? Laudantium
                                consequuntur fuga corporis deserunt dignissimos, excepturi alias
                                necessitatibus! Eligendi odit, velit deleniti aliquam aliquid
                                eligendi assumenda sapiente. Aperiam praesentium facere sunt
                                inventore, odit tempore nihil quaerat, eaque porro sint quae
                                adipisci ab. At voluptas sint necessitatibus temporibus iusto,
                                nobis ipsum odit eum fugiat quisquam voluptatum molestias
                                nostrum accusamus magni, ab quas saepe eos neque tempore
                                consequatur aliquam alias quod. Molestias eveniet sequi unde,
                                itaque nobis obcaecati incidunt voluptate nesciunt architecto
                                minus!
                            </p> */}
              <ReactMarkdown children={t} />
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
                  <h5>Иван Иванов</h5>
                </div>
                <div className="col-3 ">
                  <a
                    className="btn btn-primary btn-xlg"
                    href="tel:713-992-0916"
                  >
                    713-992-0916
                  </a>
                </div>
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
        <textarea className="form-control" rows={3}></textarea>
        <Button>Отправить</Button>
      </Popup>
    </div>
  );
};

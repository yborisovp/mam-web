import { Button, Carousel } from "react-bootstrap";
import styles from "./item.module.scss";
import { YMaps } from "react-yandex-maps";
import { useState } from "react";

export const ItemView = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      className={
        styles.body + " d-flex justify-content-center align-items-center"
      }
    >
      <div className={styles.container + " container mt-4 mb-3"}>
        <div className="row">
          <div className="col-12">
            <Carousel
              fade
              className="mb-4 w-100 shadow-1-strong rounded-2 align-self-center"
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
          <div className="col-8 pe-0">
            <div className={styles["card-main"] + " card p-4 pt-0 mb-3 "}>
              <div className="row mx-0">
                <div className="col-10 p-0">
                  <h4 className={styles["item-title"] + " mx-2 mb-2 m-0"}>
                    Продам Toyota Vitz, 2017 год
                  </h4>
                  <h6 className=" mx-2 mb-0 font-monospace text-color-demigray"></h6>
                </div>
              </div>

              <div className={styles["card-info"] + " card mt-4 p-2"}>
                <div className="row text-center">
                  <div className="col-3">
                    <h5>Правый</h5>
                    <h6 className="text-color-demigray">Руль</h6>
                  </div>
                  <div className="col-3">
                    <h5>135</h5>
                    <h6 className="text-color-demigray">Л.С.</h6>
                  </div>
                  <div className="col-3">
                    <h5>Правый</h5>
                    <h6 className="text-color-demigray">Руль</h6>
                  </div>
                  <div className="col-3">
                    <h5>135</h5>
                    <h6 className="text-color-demigray">Л.С.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["card-main"] + " card p-3"}>
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
            <div className={styles["card-main"] + " card p-3"}>
              <h5 className="text-w-600">Описание</h5>
              <p className={styles["text-main"] + " mt-2"}>
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
              </p>
            </div>

            <div className={styles["card-main"] + " card p-4"}>
              <h5 className="mb-3 text-w-600">Местоположение</h5>
              <YMaps query={{ lang: "en_RU" }}></YMaps>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.sticky + " card p-3 sticky-top"}>
              <div className="d-flex flex-row icon-align-center justify-content-between">
                <h3 className="mb-0">4 500 000 ₽</h3>
                <a className="" href="#">
                  <i className="fa-regular fa-heart fa-2x text-color-demigray"></i>
                </a>
              </div>

              <hr className="mt-3 mb-3" />
              <div className="row mt-2">
                <div className="col-3">
                  <img
                    src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
                    alt=""
                    className="rounded-circle w-100 h-100"
                  />
                </div>
                <div className="col-9">
                  <p className="m-0 text-color-demigray">Продавец</p>
                  <h5>Иван Иванов</h5>
                </div>
              </div>
              <button
                className="btn btn-success mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <a href="#" className="icon-d">
                  <i className="fa-solid fa-phone"></i>
                </a>
                Показать номер
              </button>
              <div className="collapse" id="collapseExample">
                <div className={styles["card-main"] + " card card-body  py-2"}>
                  +8 (951) 555 55 55
                </div>
              </div>
              <button
                className="btn btn-primary mt-2 mb-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Написать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Accordion, Button, Dropdown, Form } from "react-bootstrap";
import "./adminPanel.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchModel } from "../../Models/Search/SearchModel";
import { SearchItemService } from "../../Services/SearchItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";

export const AdminPanel = () => {


    return (
        <div className="container container-main">
            <div className="col-12 p-2 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none mt-2 justify-content-between ">
                <Button variant="secondary" className="w-100 me-1">Мои объявления</Button>
                <Button variant="secondary" className="w-100 ms-1">Избранные объявления</Button>
            </div>
            <div className="row">
                <div className="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-12 ps-0 row mx-auto">

                    <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 mx-auto">
                        <div className="container d-flex flex-column gap-2 p-2 pt-2">
                            <div className="card p-4 mb-2 border">
                                <div className="row">
                                    <div className="">
                                        <p className="h4 col-12 mt-md-2 mt-2 mt-sm-2 mt-lg-0 mt-xl-0">Жалоба от пользователя ИМЯ</p>
                                        <div className="pt-1 crop-text-1 desc text-f ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                            quo dolorem rerum impedit voluptatem debitis vel, vitae aliquid?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                        <a href="Individual-post.html">
                                            <img
                                                className="rounded img-h2 w-100 h-100"
                                                src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/car-photography/car-photography_fb-img_1200x800.jpg"
                                            />
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                        <div className="row mt-md-3 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
                                            <p className="h4 col-6 ">Audi Q3</p>
                                            <p className="h3 col-6 text-all-end">4500000 ₽</p>
                                        </div>
                                        <p className="h6 pt-3 text-color-demigray">БУ</p>
                                        <div className="pt-1 crop-text-1 desc text-f">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                            quo dolorem rerum impedit voluptatem debitis vel, vitae aliquid?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12">
                        <div className="container d-flex flex-column gap-2 pt-2">
                            <div className="card p-4 mb-2 border">
                                <div className="row">
                                    <div className="">
                                        <p className="h4 col-12 mt-md-2 mt-2 mt-sm-2 mt-lg-0 mt-xl-0">Жалоба от пользователя ИМЯ</p>
                                        <div className="pt-1 crop-text-1 desc text-f ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                            quo dolorem rerum impedit voluptatem debitis vel, vitae aliquid?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                        <a href="Individual-post.html">
                                            <img
                                                className="rounded img-h2 w-100 h-100"
                                                src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/car-photography/car-photography_fb-img_1200x800.jpg"
                                            />
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                        <div className="row mt-md-3 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
                                            <p className="h4 col-6 ">Audi Q3</p>
                                            <p className="h3 col-6 text-all-end">4500000 ₽</p>
                                        </div>
                                        <p className="h6 pt-3 text-color-demigray">БУ</p>
                                        <div className="pt-1 crop-text-1 desc text-f">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                            quo dolorem rerum impedit voluptatem debitis vel, vitae aliquid?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus expedita,
                                            optio maiores blanditiis laudantium doloremque unde sint et autem vero ut,
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block d-md-none d-sm-none hidden-md mb-3 gap-2">

                    <Button className="w-100 m-2" variant="secondary">Объявления</Button>
                    <Button className="w-100 m-2" variant="secondary">Пользователи</Button>
                </div>
            </div >
        </div >
    );
};

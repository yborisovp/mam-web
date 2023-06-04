import { Accordion, Button, Form } from "react-bootstrap";
import "./search.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchModel } from "../../Models/Search/SearchModel";
import { SearchItemService } from "../../Services/SearchItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";
import Dropdown from "react-bootstrap/Dropdown";
import IDropdownItem from "./DropdownItem";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


export const SearchView = () => {
    const [items, setItems] = useState<SellItemModel[]>();
    const { state } = useLocation();

    const getData = async (params: SearchModel) => {
        const result = await SearchItemService.SearchByParams(params);
        setItems(result);
    }


    const customDropdown = (
        title: string,
        options: IDropdownItem[],
        isFirst?: boolean
    ) => {
        let dropdownClass =
            "searchContainer search-toolbox item col-6 col-lg col-md-6 col-xl";
        if (isFirst) {
            dropdownClass =
                "searchContainer search-toolbox item col-6 col-lg col-md-6 col-xl first";
        }
        return (
            <Dropdown className={dropdownClass}>
                <Dropdown.Toggle className="w-100 h-100" variant="light">
                    <div className="">
                        <div className="text-color-demigray">{title} </div>
                    </div>
                    <>{options.find((i) => i.isSelected === true)?.item}</>
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    {options.map((option) => (
                        <Dropdown.Item
                            key={option.item + Math.random()}
                            active={option.isSelected === true}
                        >
                            {option.item}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    useEffect(() => {
        console.log(state)
        const params: SearchModel = state;


        getData(params).catch(console.error);
    }, [state]);


    let item1: IDropdownItem = {
        item: "Б/У",
        isSelected: true,
    };
    let item2: IDropdownItem = {
        item: "Новые",
        isSelected: false,
    };

    let item3: IDropdownItem = {
        item: "Porshe",
        isSelected: true,
    };
    let item4: IDropdownItem = {
        item: "BMW",
        isSelected: false,
    };
    let item5: IDropdownItem = {
        item: "Lada",
        isSelected: true,
    };
    let item6: IDropdownItem = {
        item: "Седан",
        isSelected: false,
    };
    let item7: IDropdownItem = {
        item: "Купе",
        isSelected: false,
    };

    return (
        <div className="container container-main">

            <div className="body p-0">
                <div
                    className="searchContainer w-100 ps-5 pe-5 mb-3  ms-0 me-0"
                >
                    <div className="searchContainer search-text p-0 mb-0 mb-md-5 mb-lg-5 mb-5">
                        <h2>Ваш новый автомобиль</h2>
                        <h1>Найдется здесь</h1>
                    </div>
                    <div
                        className="searchContainer search-toolbox row d-flex p-0"
                    >
                        {customDropdown("Тип", [item1, item2], true)}
                        {customDropdown("Марка", [item3, item4, item5])}
                        {customDropdown("Тип", [item7, item6])}
                        <button
                            className="searchContainer search-toolbox search col p-0"

                        >
                            Найти
                        </button>
                    </div>
                </div>
            </div>
            <div className="row p-2">
                {/* <div className="col-12 d-inline d-sm-inline d-md-none d-lg-none d-xl-none p-0 container">
                    <div className="d-flex mt-2 text-color-demigray">
                        <i className="fa-solid fa-filter me-2"></i>
                        Добавить фильтр
                    </div>
                    <hr className="mt-1 mb-1" />
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="p-0 text-color-demigray pb-2">
                                Тип машины
                            </Accordion.Header>
                            <Accordion.Body className="pt-1 accordion-body-s text-color-demigray">
                                <Accordion.Collapse className="pt-1" eventKey="0">
                                    <Form.Check
                                        label="Новая"
                                    />
                                </Accordion.Collapse>
                                <Accordion.Collapse className="pt-1" eventKey="0">
                                    <Form.Check
                                        label="Б/У"
                                    />
                                </Accordion.Collapse>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="p-0 text-color-demigray">
                                Тип машины
                            </Accordion.Header>
                            <Accordion.Body className="pt-1 accordion-body-s text-color-demigray">
                                <Accordion.Collapse className="pt-1" eventKey="1">
                                    <Form.Check
                                        label="Новая"
                                    />
                                </Accordion.Collapse>
                                <Accordion.Collapse className="pt-1" eventKey="1">
                                    <Form.Check
                                        label="Б/У"
                                    />
                                </Accordion.Collapse>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div> */}


                {/* <div className="col-10 p-0">
                    <div className="container d-flex flex-column gap-2 pt-2">
                        {items?.map((i) => (
                            <div className="card p-4 " key={i.id}>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                        <a href="Individual-post.html">
                                            <img
                                                className="rounded object-fit-cover img-h"
                                                src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/car-photography/car-photography_fb-img_1200x800.jpg"
                                            />
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                        <div className="row">
                                            <p className="h4 col-6">{i.title}</p>
                                            <p className="h3 col-5 text-all-end">{i.price} ₽</p>
                                            <p className="h6 pt-3 text-color-demigray">БУ</p>
                                            <div className="col-12pt-1 crop-text-1 desc">
                                                {i.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 p-0">
                    <div className="container d-flex flex-column gap-2 p-1 pt-2">
                        <div className="card p-4 border mb-2">
                            <div className="row">
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
                                        <p className="h4 col-6 ">Audi Q8</p>
                                        <p className="h3 col-6 text-all-end">4500000 ₽</p>
                                    </div>
                                    <p className="h6 pt-3 text-color-demigray">БУ</p>
                                    <div className="pt-1 crop-text-1 desc text-f">
                                        <ReactMarkdown> 
                                        Audi Q8 - это высококлассный кроссовер, который воплощает в себе исключительный дизайн, передовые технологии и высокий уровень комфорта. Этот автомобиль в отличном состоянии с пробегом всего 30 тысяч километров и полностью готов к новым приключениям на дорогах.
                                        В Audi Q8 установлен мощный двигатель, который обеспечивает плавную и динамичную езду, а также надежную коробку передач, которая позволяет легко переключаться на любую скорость. Этот автомобиль также оснащен передовыми системами привода и безопасности, делая его одним из самых безопасных и надежных кроссоверов на дорогах.
                                    
                                        </ReactMarkdown>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 p-0">
                    <div className="container d-flex flex-column gap-2 p-0 p-sm-0 p-md-2 p-lg-2 pxl-2 pt-2">
                        <div className="card p-4 border mb-2">
                            <div className="row">
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
                                    <ReactMarkdown> 
                                    Audi Q3 - это элегантный, компактный и универсальный кроссовер, который может стать идеальным спутником как в городе, так и за его пределами. Этот конкретный Audi Q3 находится в отличном состоянии, имеет пробег всего 30 тысяч километров и готов к новым приключениям на дорогах.

Audi Q3 обладает мощным и экономичным двигателем, который обеспечивает плавную и комфортную езду на любой дороге. Кроме того, этот кроссовер оснащен передовыми системами безопасности, такими как системы контроля стабильности и торможения, а также множеством подушек безопасности, делая его одним из самых безопасных автомобилей в своем классе.
                                        </ReactMarkdown></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

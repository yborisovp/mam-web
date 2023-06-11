import { useCallback, useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import useFetch from "../../hooks/UseFetch";
import IDropdownItem from "./DropdownItem";

import { SellItemModel } from "../../Models/SellItem/SellItem";
import { SellItemView } from "../SellItem/SellItemView";
import { IBannerItem } from "../../Models/BannerItem";
import { BannerItemView } from "../BannerItem/BannerItemView";

import styles from "./home.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ItemView } from "../Item/ItemView";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { SearchModel } from "../../Models/Search/SearchModel";
import { SearchItemService } from "../../Services/SearchItemService";
import { ApplicationRoutes } from "../../RoutesConstants";
import { SellItemService } from "../../Services/SellItemService";

function HomePage() {
  const [items, setItems] = useState<SellItemModel[]>();
  const { state } = useLocation();
  const navigate = useNavigate();

  const getData = async (params: SearchModel) => {
    const result = await SellItemService.GetAllSellItems();
    setItems(result);
  };

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
    console.log(state);
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
        <div className="searchContainer w-100 ps-5 pe-5 mb-3  ms-0 me-0">
          <div className="searchContainer search-text p-0 mb-0 mb-md-5 mb-lg-5 mb-5">
            <h2>Ваш новый автомобиль</h2>
            <h1>Найдется здесь</h1>
          </div>
          <div className="searchContainer search-toolbox row d-flex p-0">
            {customDropdown("Тип", [item1, item2], true)}
            {customDropdown("Марка", [item3, item4, item5])}
            {customDropdown("Тип", [item7, item6])}
            <button className="searchContainer search-toolbox search col p-0">
              Найти
            </button>
          </div>
        </div>
      </div>
      <div className="row p-2">
        {items?.map((el) => {
          return (
            <>
              <div
                className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 p-0 cursor-pointer"
                onClick={() => navigate(ApplicationRoutes.ItemRoute + "?id="+el.id)}
              >
                <div className="container d-flex flex-column gap-2 p-1 pt-2">
                  <div className="card p-4 border mb-2">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                        <img
                          className="rounded img-h2 w-100 h-100"
                          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/car-photography/car-photography_fb-img_1200x800.jpg"
                        />
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <div className="row mt-md-3 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
                          <p className="h4 col-6 ">{el.title}</p>
                          <p className="h3 col-6 text-all-end">{el.price} ₽</p>
                        </div>
                        <p className="h6 pt-3 text-color-demigray">{el.attributes.find(a => a.key === "Type")?.value}</p>
                        <div className="pt-1 crop-text-1 desc text-f">
                          <ReactMarkdown>
                            {el.body}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

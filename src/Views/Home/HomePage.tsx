import { useCallback, useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import useFetch from "../../hooks/UseFetch";
import IDropdownItem from "./DropdownItem";

import { SellItemModel } from "../../Models/SellItem/SellItem";
import { SellItemView } from "../SellItem/SellItemView";
import { IBannerItem } from "../../Models/BannerItem";
import { BannerItemView } from "../BannerItem/BannerItemView";

import styles from "./home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ItemView } from "../Item/ItemView";

function HomePage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const customDropdown = (
    title: string,
    options: IDropdownItem[],
    isFirst?: boolean
  ) => {
    let dropdownClass =
      styles["searchContainer__search-toolbox--item"] + " col";
    if (isFirst) {
      dropdownClass =
        styles["searchContainer__search-toolbox--item"] + " col first";
    }
    return (
      <Dropdown className={dropdownClass}>
        <Dropdown.Toggle className="w-100 h-100" variant="light">
          <div
            className={
              styles["searchContainer__search-toolbox--item__type"] + " mb-2"
            }
          >
            {title}
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

  let item1: IDropdownItem = {
    item: "Б/У",
    isSelected: true,
  };
  let item2: IDropdownItem = {
    item: "Новые",
    isSelected: false,
  };

  let sellItem: SellItemModel = {
    id: "",
    createdAt: new Date(),
    lasUpdatedAt: new Date(),
    title: "Porsche Panamera, 2023",
    description: "5 223 км",
    price: "15 000 000 Р",
    body: "",
    postedAt: new Date(),
    files: [],
    attributes: []
  };

  let bannerItem: IBannerItem = {
    title: "Автомобили до 500 000 Р",
    searchResult: "100 000 автомобилей",
    imgUrl:
      "https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg",
  };
  const navigate = useNavigate();
  const handleClick = (item: string) => {
    navigate("/item/");
  };
  return (
    <div className={styles.body + " container-xl"}>
      <div
        className={
          styles.searchContainer +
          " d-none d-md-block w-100 container-xxl ps-5 pe-5 mb-xxl-4"
        }
      >
        <div className={styles["searchContainer__search-text"] + " mb-5"}>
          <h2>Ваш новый автомобиль</h2>
          <h1>Найдется здесь</h1>
        </div>
        <div
          className={styles["searchContainer__search-toolbox"] + " row d-flex"}
        >
          {customDropdown("Тип", [item1, item2], true)}
          {customDropdown("Марка", [item1, item2])}
          {customDropdown("Тип", [item1, item2])}
          {customDropdown("Тип", [item1, item2])}

          <button
            className={
              styles["searchContainer__search-toolbox--search"] + " col"
            }
          >
            Найти
          </button>
        </div>
      </div>
      <div className="recommend">
        <div className={styles.recommend__text + " mb-3"}>
          Популярно в вашем регионе
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 gap-md-0 ms-4 me-4 ms-md-0 me-md-0 justify-content-between mb-5">
          {[...Array(4)].map((x, i) => (
            <BannerItemView key={i + Math.random() + "nvve"} bannerItem={bannerItem} />
          ))}
        </div>
      </div>
      <div className="cars">
        <div className={styles["cars__text"] + " mb-3"}>
          Посмотрите последние предложения
        </div>
        <div>
          {[...Array(2)].map((x, i) => (
            <div
              key={i + x + Math.random() + "nw"}
              className="d-flex flex-column gap-2 gap-md-0 flex-md-row ms-2 me-5 ms-md-0 me-md-0 justify-content-between mb-4"
            >
              {[...Array(4)].map((y, j) => (
                <div key={j + Math.random() + "hgiw"} onClick={() => handleClick(i + 1 + "." + (j + 1))}>
                  <SellItemView  sellItem={sellItem} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <a className="show-more d-block w-100 text-center" href=".">
        Еще
      </a>
    </div>
  );
}

export default HomePage;

import { useCallback, useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import useFetch from "../../hooks/UseFetch";
import IDropdownItem from "./DropdownItem";

import { ISellItem } from "../../Models/SellItem";
import { SellItemView } from "../SellItem/SellItemView";
import { IBannerItem } from "../../Models/BannerItem";
import { BannerItemView } from "../BannerItem/BannerItemView";

import styles from "./home.module.scss";

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
              key={option.item}
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

  let sellItem: ISellItem = {
    title: "Porsche Panamera, 2023",
    hint: "5 223 км",
    price: "15 000 000 Р",
    body: "",
    postedAt: new Date(),
    imgUrl:
      "https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg",
    attributes: ["Б/У", "c", "dsfs", "sdfsfds"],
  };

  let bannerItem: IBannerItem = {
    title: "Автомобили до 500 000 Р",
    searchResult: "100 000 автомобилей",
    imgUrl:
      "https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg",
  };

  return (
    <div className={styles.body + " container-xl"}>
      <div
        className={
          styles.searchContainer +
          " container-xxl m-5 ps-5 pe-5 m-xxl-0 mb-xxl-4"
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
        <div className="d-flex justify-content-between mb-5">
          {[...Array(4)].map((x, i) => (
            <BannerItemView key={i} bannerItem={bannerItem} />
          ))}
        </div>
      </div>
      <div className="cars">
        <div className={styles["cars__text"] + " mb-3"}>
          Посмотрите последние предложения
        </div>
        <div>
          {[...Array(2)].map((x, i) => (
            <div key={i + x} className="d-flex justify-content-between mb-4">
              {[...Array(5)].map((y, j) => (
                <SellItemView key={j} sellItem={sellItem} />
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

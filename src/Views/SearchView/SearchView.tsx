import {  Button } from "react-bootstrap";
import "./search.scss";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchModel } from "../../Models/Search/SearchModel";
import { SearchItemService } from "../../Services/SearchItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";
import { FilterView } from "./Filter";
import { ApplicationRoutes } from "../../RoutesConstants";
import { LocalizationService } from "../../Services/Localization/LocalizationService";

export const SearchView = () => {
  const [items, setItems] = useState<SellItemModel[]>();
  
  const [searchParams] = useSearchParams();    
  const navigator = useNavigate();

  const getData = async (params: SearchModel) => {
    const result = await SearchItemService.SearchByParams(params);
    setItems(result);
  };

  useEffect(() => {
    const storage = localStorage.getItem("search");
    if (storage !== null) {
      const params: SearchModel = JSON.parse(storage);
   
      getData(params);
    }
    
  }, [searchParams]);


  const [filters, setFilters] = useState<string[]>();

  const getFilters = async () => {
    const f = await SearchItemService.GetAvailableFilters();
    const sa: string[] = [];
    f.forEach((el) => {
      sa.push(LocalizationService.LocalizeCarAdditionalAttributes(el.toLowerCase()))
    })
    setFilters(sa);
  };

  useEffect(() => {
    getFilters();
  }, []);

  
  return (
    <div className="container container-main">
      <div className="row">
        <p className="h1 mb-5">Найти машину</p>
        <div className="col-5 mb-3 d-flex gap-2">
          <Button variant="secondary">Новые</Button>
          <Button variant="secondary">Б/У</Button>
        </div>
        <div className="col-10 p-0">
          <div className="container d-flex flex-column gap-2 pt-2">
            {items?.map((i) => (
              <div className="card cursor-pointer p-4 " key={i.id} onClick={() =>navigator(ApplicationRoutes.ItemRoute + `?id=${i.id}`)}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                   {i.files.length === 0 ? (<>Нет изображения</>): <img
                        alt=""
                        className="rounded object-fit-cover img-h"
                        src={i.files[0].filePath}
                        />}
                      
                  
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
        </div>
        <FilterView filters={filters}/>
      </div>
    </div>
  );
};

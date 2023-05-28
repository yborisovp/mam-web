import { Accordion, Button, Form } from "react-bootstrap";
import "./search.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchModel } from "../../Models/Search/SearchModel";
import { SearchItemService } from "../../Services/SearchItemService";
import { SellItemModel } from "../../Models/SellItem/SellItem";

export const SearchView = () => {
  const [items, setItems] = useState<SellItemModel[]>();
  const { state } = useLocation();

  const getData = async (params: SearchModel) => {
    const result = await SearchItemService.SearchByParams(params);
    setItems(result);
  }

  useEffect(() => {
    console.log(state)
    const params: SearchModel = state;


    getData(params).catch(console.error);
  }, [state]);

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
        </div>
        <div className="col-2 p-0">
          <div className="d-flex mt-2">
            <i className="fa-solid fa-filter me-2 text-color-demigray"></i>
            <input
              placeholder="Добавить фильтр"
              className="h6 input-custom text-color-demigray"
            />
          </div>
          <hr className="mt-1 mb-1" />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Accordion.Button>Тип машины</Accordion.Button>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion.Collapse eventKey="0">
                  <Form.Check>Новый</Form.Check>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                  <Form.Check>Б/У</Form.Check>
                </Accordion.Collapse>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

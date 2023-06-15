import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { SearchItemService } from "../../Services/SearchItemService";
import { useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../RoutesConstants";
import { SearchModel } from "../../Models/Search/SearchModel";
export const FilterView = ({ filters }: { filters: string[] | undefined }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();
  return (
    <div className="col-2 p-0">
      <div className="mt-2">
        <input
          placeholder="Добавить фильтр"
          className="h6 input-custom text-color-demigray"
          onChange={(event) => setSearchTitle(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              var json = localStorage.getItem("search");
              if (json !== null) {
                let a: SearchModel = JSON.parse(json);
                if (a.title !== null) {
                  a.title = a.title + searchTitle;
                } else {
                  a.title = searchTitle;
                }
                localStorage.setItem("search", JSON.stringify(a));
              } else {
                const model: SearchModel = {
                  title: searchTitle,
                  priceFrom: null,
                  priceUntil: null,
                  getCount: null,
                  skipCount: null
                };
                localStorage.setItem("search", JSON.stringify(model));
              }
              navigate(ApplicationRoutes.SearchRoute);
            }
          }}
        />
      </div>
      <hr className="mt-1 mb-1" />
      <Accordion>
        {filters?.map((f, index) => {
          if (f !== "")
            return (
              <>
                <Accordion.Item eventKey={`${index}`}>
                  <Accordion.Header>
                    <FontAwesomeIcon icon={faPlus} />
                    <Accordion.Button className="mt-2 mb-2">
                      {f}
                    </Accordion.Button>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion.Collapse eventKey={`${index}`}>
                      <Form.Check>Новый</Form.Check>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey={`${index}`}>
                      <Form.Check>Б/У</Form.Check>
                    </Accordion.Collapse>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          return <></>;
        })}
      </Accordion>
    </div>
  );
};

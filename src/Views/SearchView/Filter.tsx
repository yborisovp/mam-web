import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Form } from "react-bootstrap";
export const FilterView = () => {
    
    return (
        <div className="col-2 p-0">
          <div className="mt-2">
            <input
              placeholder="Добавить фильтр"
              className="h6 input-custom text-color-demigray"
            />
          </div>
          <hr className="mt-1 mb-1" />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FontAwesomeIcon icon={faPlus}/>
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
    );
}

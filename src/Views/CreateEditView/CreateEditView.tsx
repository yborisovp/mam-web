import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CreateSellItemModel } from "../../Models/SellItem/CreateSellItem";
import { useNavigate } from "react-router-dom";
import { AttributesModel } from "../../Models/SellItem/Attributes";
import { AllowedCarParameters } from "../../Models/SellItem/AllowedCarParameters";

export type CreateEditViewProps = {
  edit: boolean;
};

type CreateModel<T> = { [K in keyof T]: T[K] };
export const CreateEditView = ({ edit = false }: CreateEditViewProps) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<CreateModel<CreateSellItemModel>>();
  const [attributes, setAttributes] = useState<AttributesModel[]>([]);

  const handleCreateModelChange = <K extends keyof CreateSellItemModel>(formStateItem: K) => {
    console.log(inputs);
    return (e: ChangeEvent<HTMLInputElement>) => {
      setInputs(
        (values) =>
          ({
            ...values,
            [formStateItem]: e.target.value as any,
          } as CreateModel<CreateSellItemModel>)
      );
    };
  };

  const handleAttributeModelChange = (formStateItem: keyof (typeof AllowedCarParameters)) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      
      const item: AttributesModel = {
        key: formStateItem,
        value: e.target.value as string
      } 
      
      setAttributes(attributes.map(i => i.key === formStateItem ? {...i, value: e.target.value as string}: item));
    };
  };

  const handleSubmit = async (event: any) => {
    if (inputs !== undefined) {
      /* await SellItemService.CreateItem(inputs);
      navigate(ApplicationRoutes.SearchRoute , {state: {title: inputs.title}})
      return; */

      const item:CreateSellItemModel = inputs;
      item.attributes = attributes;

      console.log(item);
    }
    
    alert("Вы не заполнили поля")
  };
  return (
    <div className="container">
     <div className="container mt-4 mb-3 card-body">
        <div className="card p-3 pt-4 ps-5 mb-3">
          <p className="h2 mb-5">Подать объявление о продаже автомобиля</p>
          <div className="row">
            <p className="h6 col-3 m-0 pt-2">Раздел</p>
            <select onChange={() => handleAttributeModelChange("Chapter")}>
              <option hidden value="DEFAULT">
                Выберите вид автомобиля
              </option>
              <option>Новый</option>
              <option>Б/У</option>
            </select>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Марка</p>
            <div className="col-5">
              <select className="form-select input-form" onChange={() => handleAttributeModelChange("Brand")}>
                <option hidden value="DEFAULT">
                  Выберите марку
                </option>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Модель</p>
            <div className="col-5">
              <select className="form-select input-form" onChange={() => handleAttributeModelChange("Model")}>
                <option hidden value="DEFAULT">
                  Выберите модель
                </option>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Руль</p>
            <div className="col-5 pt-2">
              <Form.Check inline type="radio" label="Правый" onChange={() => handleAttributeModelChange("WheelType")}/>
              <Form.Check inline type="radio" label="Левый" onChange={() => handleAttributeModelChange("WheelType")}/>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Год выпуска</p>
            <div className="col-5">
              <select className="form-select input-form" onChange={() => handleAttributeModelChange("WheelType")}>
                <option hidden value="DEFAULT">
                  Выберите год выпуска
                </option>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Привод</p>
            <div className="col-5 pt-2">
              <div className="form-check form-check-inline" onChange={() => handleAttributeModelChange("Transmission")}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Задний
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Передний
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Полный
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Тип топлива</p>
            <div className="col-5">
              <select className="form-select input-form" onChange={() => handleAttributeModelChange("FuelType")}>
                <option hidden value="DEFAULT">
                  Выберите тип топлива
                </option>
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Коробка передач</p>
            <div className="col-5 pt-2">
              <div className="form-check form-check-inline"  onChange={() => handleAttributeModelChange("EquipmentType")}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions3"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Автомат
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions3"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Механика
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions3"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Робот
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <p className="h6 col-3 m-0 pt-3">Объем двигателя</p>
            <div className="col-5 pt-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-form"
                  id="exampleDropdownFormEmail1"
                  placeholder="л"
                />
              </div>
            </div>
          </div>

          <div className="row mt-1">
            <p className="h6 col-3 m-0 pt-3">Мощность</p>
            <div className="col-5 pt-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-form"
                  id="exampleDropdownFormEmail1"
                  placeholder="л.с."
                  onChange={() => handleAttributeModelChange("EngineCapacity")}
                />
              </div>
            </div>
          </div>

          <div className="row mt-1">
            <p className="h6 col-3 m-0 pt-3">Цена</p>
            <div className="col-5 pt-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-form"
                  id="exampleDropdownFormEmail1"
                  placeholder="Ведите цену"
                  onChange={() => handleCreateModelChange("price")}
                />
              </div>
            </div>
          </div>

          <p className="h6 col-3 m-0 mt-2 pt-2 mb-3">Описание</p>
          <textarea
            className="text-area text-box multi-line me-4 input-form"
            data-val="true"
            data-val-length="Maximum = 2045 characters"
            data-val-length-max="2045"
            id="info"
            name="info"
            cols={40}
            rows={3}
            onChange={() => handleCreateModelChange("description")}
          ></textarea>

          <p className="h6 col-3 m-0 mt-4 pt-2 mb-3">Выберите фотографии</p>
          <div className="me-4">
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>

          <Button onClick={handleSubmit}>Отправить</Button>
        </div>
      </div>
    </div>
  );
};

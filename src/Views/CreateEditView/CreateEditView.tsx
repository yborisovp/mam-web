import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CreateSellItemModel } from "../../Models/SellItem/CreateSellItem";
import { useNavigate } from "react-router-dom";
import { AttributesModel } from "../../Models/SellItem/Attributes";
import { AllowedCarParameters } from "../../Models/SellItem/AllowedCarParameters";
import "./createEdit.scss";
import { SellItemService } from "../../Services/SellItemService";
import { ApplicationRoutes } from "../../RoutesConstants";

export type CreateEditViewProps = {
  edit: boolean;
};

type CreateModel<T> = { [K in keyof T]: T[K] };
export const CreateEditView = ({ edit = false }: CreateEditViewProps) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<CreateModel<CreateSellItemModel>>();
  const [attributes, setAttributes] = useState<AttributesModel[]>([]);

  const handleCreateModelChange = <T, K extends keyof CreateSellItemModel>(
    formStateItem: K
  ) => {
    return (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setInputs(
        (values) =>
          ({
            ...values,
            [formStateItem]: e.target.value as any,
          } as CreateModel<CreateSellItemModel>)
      );
    };
  };

  const handleAttributeModelChange = <T,K extends keyof typeof AllowedCarParameters>(formStateItem: K) => {
    return (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
      const newItem: AttributesModel = {
        key: formStateItem,
        value: e.target.value as string,
      };
      // setAttributes(attributes.map(i => i.key === formStateItem ? {...i, value: e.target.value as string}: item));
      if (attributes.length === 0) {
        const arr = attributes;
        arr.push(newItem);
        setAttributes(arr);
      } else {
        const isItemExist = attributes.find((i) => i.key === formStateItem);
        if (isItemExist) {
          const updatedList = attributes.map((item) => {
            if (item.key === formStateItem) {
              return { ...item, value: e.target.value }; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item
          });
          console.log(updatedList);
          setAttributes(updatedList);
        } else {
          const arr = attributes;
          arr.push(newItem);
          console.log(arr);
          setAttributes(arr);
        }
      }
    };
  };

  const handleAttributeModelChangeForInput = <
    T,
    K extends keyof typeof AllowedCarParameters
  >(
    formStateItem: K
  ) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const newItem: AttributesModel = {
        key: formStateItem,
        value: e.target.value as string,
      };

      // setAttributes(attributes.map(i => i.key === formStateItem ? {...i, value: e.target.value as string}: item));
      if (attributes.length === 0) {
        const arr = attributes;
        arr.push(newItem);
        setAttributes(arr);
      } else {
        const isItemExist = attributes.find((i) => i.key === formStateItem);
        if (isItemExist) {
          const updatedList = attributes.map((item) => {
            if (item.key === formStateItem) {
              return { ...item, value: e.target.value }; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item
          });
          console.log(updatedList);
          setAttributes(updatedList);
        } else {
          const arr = attributes;
          arr.push(newItem);
          console.log(arr);
          setAttributes(arr);
        }
      }
    };
  };

  const handleSubmit = async (event: any) => {
    if (inputs !== undefined) {
      /* await SellItemService.CreateItem(inputs);
      navigate(ApplicationRoutes.SearchRoute , {state: {title: inputs.title}})
      return; */

      const item: CreateSellItemModel = inputs;
      item.attributes = attributes;
      const response = await SellItemService.CreateItem(item);
      navigate(ApplicationRoutes.ItemRoute + "?id=" + response?.id);
    }
  };

  return (
    <div className="container">
      <div className="container mt-4 mb-3 card-body width-m">
        <div className="card p-3 pt-4 ps-5 mb-3">
          <p className="h2 mb-5">Подать объявление о продаже автомобиля</p>
          
          <div className="row mt-1">
            <p className="h6 col-3 m-0 pt-3">Название</p>
            <div className="col-5 pt-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-form"
                  id="exampleDropdownFormEmail1"
                  placeholder="Ведите название"
                  onChange={handleCreateModelChange("title")}
                />
              </div>
            </div>
          </div>

          <div className="row mt-0">
            <p className="h6 col-3 m-0 pt-2">Вид автомобиля</p>
            <div className="col-5">
              <select
                className="form-select input-form"
                onChange={handleAttributeModelChange("Type")}
              >
                <option hidden value="DEFAULT">
                  Выберите вид автомобиля
                </option>
                <option>Седан</option>
                <option>Кроссовер</option>
                <option>Купе</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Марка</p>
            <div className="col-5">
              <select
                className="form-select input-form"
                onChange={handleAttributeModelChange("Brand")}
              >
                <option hidden value="DEFAULT">
                  Выберите марку
                </option>
                <option>BMV</option>
                <option>Mersedes</option>
                <option>Porche</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Модель</p>
            <div className="col-5">
              <select
                className="form-select input-form"
                onChange={handleAttributeModelChange("Model")}
              >
                <option hidden value="DEFAULT">
                  Выберите модель
                </option>
                <option>100</option>
                <option>300</option>
                <option>500</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Руль</p>
            <div className="col-5 pt-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                  value="option1"
                  onChange={handleAttributeModelChange("WheelType")}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Правый
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio2"
                  value="option2"
                  onChange={handleAttributeModelChange("WheelType")}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Левый
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Год выпуска</p>
            <div className="col-5">
              <Form.Control
              id="dateControll"
                type="date"
                onChange={handleAttributeModelChangeForInput("Year")}
              />
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Привод</p>
            <div className="col-5 pt-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio1"
                  value="option1"
                  onChange={handleAttributeModelChange("Transmission")}
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
              <select
                className="form-select input-form"
                onChange={handleAttributeModelChange("FuelType")}
              >
                <option hidden value="DEFAULT">
                  Выберите тип топлива
                </option>
                <option>92</option>
                <option>95</option>
                <option>Дизель</option>
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <p className="h6 col-3 m-0 pt-2">Коробка передач</p>
            <div className="col-5 pt-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions3"
                  id="inlineRadio1"
                  value="option1"
                  onChange={handleAttributeModelChange("EquipmentType")}
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
                  className="form-control input-form error"
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
                  onChange={handleAttributeModelChange("EngineCapacity")}
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
                  onChange={handleCreateModelChange("price")}
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
            onChange={handleCreateModelChange("description")}
          ></textarea>

          <p className="h6 col-3 m-0 mt-2 pt-2 mb-3">Выберите фотографии</p>
          <div className="me-4">
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>

          <Button className="mt-4 me-4 mb-3" onClick={handleSubmit}>Отправить</Button>
        </div>
      </div>
    </div>
  );
};

import React, { ChangeEvent, useState } from "react";
import { ISellItem } from "../../Models/SellItem";

export type CreateEditViewProps = {
  edit: boolean;
};

type FormState<T> = { [K in keyof T]: T[K] };

export const CreateEditView = ({ edit = false }: CreateEditViewProps) => {
  const [inputs, setInputs] = useState<FormState<ISellItem>>();

  const handleChange = <T, K extends keyof ISellItem>(formStateItem: K) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setInputs(
        (values) =>
          ({
            ...values,
            [formStateItem]: e.target.value as any,
          } as FormState<ISellItem>)
      );
    };
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={handleChange("title")}
          />
        </div>
        <div className="form-group">
          <input
            type="price"
            name=""
            className="form-control"
            onChange={handleChange("price")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="body"
            className="form-control"
            onChange={handleChange("body")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

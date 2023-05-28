import { AllowedCarParameters } from "./AllowedCarParameters";

export interface AttributesModel {
  key: keyof (typeof AllowedCarParameters);
  value: string;
}

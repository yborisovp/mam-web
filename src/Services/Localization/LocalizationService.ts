import { AllowedCarParameters } from "../../Models/SellItem/AllowedCarParameters";

export abstract class LocalizationService {
  public static LocalizeCarAdditionalAttributes(
    name: keyof typeof AllowedCarParameters | string
  ): string {
    switch (name) {
      case "Type".toLowerCase():
        return "Тип машины";
      case "EquipmentType".toLowerCase():
        return "Тип оборудования";
      case "Brand".toLowerCase():
        return "Марка";
      case "Model".toLowerCase():
        return "Модель";
      case "WheelType".toLowerCase():
        return "Привод";
      case "Year".toLowerCase():
        return "Год";
      case "Gear".toLowerCase():
        return "Коробка передач";
      case "FuelType".toLowerCase():
        return "Вид топлива";
      case "Transmission".toLowerCase():
        return "Трансмиссия";
      case "EngineCapacity".toLowerCase():
        return "Объем двигателя";
      case "Power".toLowerCase():
        return "Мощность";
      default:
        return "";
    }
  }
}

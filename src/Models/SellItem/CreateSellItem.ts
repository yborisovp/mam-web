import { FileModel } from "../FileModel";
import { AttributesModel } from "./Attributes";

export interface CreateSellItemModel {
    title: string;
    description: string;
    createdAt: Date;
    userId: 1,
    lasUpdatedAt: Date;
    price: string;
    body: string;
    postedAt: Date;
    files: FileModel[];
    attributes: AttributesModel[];
  }

  
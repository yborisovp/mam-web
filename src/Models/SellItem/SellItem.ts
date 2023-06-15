import { FileModel } from "../FileModel";
import { UserModel } from "../User/IUser";
import { AttributesModel } from "./Attributes";

export interface SellItemModel {
  id: string,
  title: string;
  description: string;
  createdAt: Date;
  lasUpdatedAt: Date;
  price: string;
  body: string;
  postedAt: Date;
  files: FileModel[];
  attributes: AttributesModel[];
  owner?: UserModel
}

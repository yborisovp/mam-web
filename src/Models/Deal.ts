import { SellItemModel } from "./SellItem/SellItem";
import { UserModel } from "./User/IUser";

export interface DealModel {
    ownerUserId: number,
    buyerUserId: number,
    sellItemId: string
}

export interface DealUIModel {
    buyerUser: UserModel,
    sellItem: SellItemModel
}

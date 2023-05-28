import { SellItemApi } from "../API/SellItem/SellItemApi";
import { CreateSellItemModel } from "../Models/SellItem/CreateSellItem";
import { SellItemModel } from "../Models/SellItem/SellItem";

export abstract class SellItemService {
    public static async CreateItem(params: CreateSellItemModel): Promise<SellItemModel | undefined>{
        const response = await SellItemApi.post<SellItemModel>("", params);
        if (response.data) {
            return response.data;
        }
        return;
    }
}

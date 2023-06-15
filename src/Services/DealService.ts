import { DealApi } from "../API/DealApi";
import { DealModel, DealUIModel } from "../Models/Deal";
import { GetAccessToken, SellItemService } from "./SellItemService";
import { UserService } from "./UserService";

export abstract class DealService {
    public static async  GetAllDealsByCurrentUser(): Promise<DealUIModel[]> {
        const token = await GetAccessToken();
        let deals: DealModel[] = [];
        await DealApi.get<DealModel[]>("/all/current", {headers: { Authorization: `Bearer ${token}` }}).then((resp) => {
            deals = resp.data;
        });

        let dUI: DealUIModel[] = [];
        await deals.map(async (element) => {
            const rep = await SellItemService.GetById(element.sellItemId)
            
            if (rep !== undefined) {
                const buyer = await UserService.GetUserById(element.buyerUserId)
                if (buyer !== undefined)
                    dUI.push({buyerUser: buyer, sellItem: rep})
            }
            
        });
        return dUI;
    }

    public static async MakeDeal(deal: DealModel): Promise<boolean> {
        let state = false;
        const token = await GetAccessToken();
        await DealApi.post("/", deal, {headers: { Authorization: `Bearer ${token}` }})
        .then((resp) => {
            state = true;
        })
        return state;
    }

    public static async CreateDeal(deal: DealModel): Promise<boolean> {
        let state = false;
        const token = await GetAccessToken();
        await DealApi.post("/create", deal, {headers: { Authorization: `Bearer ${token}` }})
        .then((resp) => {
            state = true;
        })
        return state;
    }
}

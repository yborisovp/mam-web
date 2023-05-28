import { SellItemApi } from "../API/SellItem/SellItemApi";
import { SearchModel } from "../Models/Search/SearchModel";
import { SellItemModel } from "../Models/SellItem/SellItem";

export abstract class SearchItemService
{
    public static async SearchByParams(parameters : SearchModel): Promise<SellItemModel[]>
    {
        let route = "/search?";
        if (parameters)
        {
            if (parameters.getCount) {
                route = route + "getCount=" + parameters.getCount + "&";
            }
    
            if (parameters.priceFrom) {
                route = route + "priceFrom=" + parameters.priceFrom + "&";
            }
    
            if (parameters.priceUntil) {
                route = route + "priceUntil=" + parameters.priceUntil + "&";
            }
    
            if (parameters.skipCount) {
                route = route + "skipCount=" + parameters.skipCount + "&";
            }
    
            if (parameters.title) {
                route = route + "title=" + parameters.title;
            }
        }

        const response = await SellItemApi.get<SellItemModel[]>(route);
        if (response.data)
        {
            return response.data;
        }
        return [];
    }
}

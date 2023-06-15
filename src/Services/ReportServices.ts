import { SellItemApi } from "../API/SellItem/SellItemApi";
import { ReportModel, ReportUIModel } from "../Models/ReportModel";
import { SellItemModel } from "../Models/SellItem/SellItem";
import { SellItemService } from "./SellItemService";

export abstract class ReportService
{
    /* public static async GetAll() : Promise<ReportUIModel[]> {
        let reports: ReportModel[] = []
        await SellItemApi.get<ReportModel[]>(`/report`).then((res) => reports = res.data);
        const sellItems = await SellItemService.GetAllSellItems();
        const reportsModel: ReportUIModel[] = sellItems.map(el => {
            let a = reports.find(e => e.sellItemId === el.id);
            if (a)
                return {
                    report: a,
                    sellItems: el
                }
            continue; 
        }) 

    } */
    public static async CreateReport(itemId: string, description: string): Promise<boolean> {
        let state = false;
        await SellItemApi.post(`/report/${itemId}`, description).then(() => state = true);
        return state;
    }
}

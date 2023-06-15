import { SellItemModel } from "./SellItem/SellItem";

export interface ReportModel {
    userId: number,
    sellItemId: string,
    description: string
}
export interface ReportUIModel {
    report: ReportModel,
    sellItem: SellItemModel
}

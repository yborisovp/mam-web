import { Cookies } from "react-cookie";
import { SellItemApi, SellItemBaseAPi } from "../API/SellItem/SellItemApi";
import { ApiResponseModel, IsApiError } from "../Models/ApiResponseModel";
import { CreateSellItemModel } from "../Models/SellItem/CreateSellItem";
import { SellItemModel } from "../Models/SellItem/SellItem";
import { CookiesConstants } from "../Views/CookiesConstants";
import { UserModel } from "../Models/User/IUser";
import { AxiosError } from "axios";
import { DateTime } from "ts-luxon";

export abstract class SellItemService {
    public static async GetAllByUserId(): Promise<SellItemModel[]> {
        const token = await GetAccessToken();
        let items: SellItemModel[] = [];
        await SellItemApi.get<SellItemModel[]>(`/by-user`, {headers: { Authorization: `Bearer ${token}` }}).then((res) => {
            items = res.data;
        });
        return items;
    }
    public static async GetById(id: string, withOwner: boolean = false): Promise<SellItemModel | undefined> {
        let item: SellItemModel | undefined = undefined;
        await SellItemApi.get<SellItemModel>(`/${id}`).then((res) => {
          item = res.data;
        });

        return item;
    }

    public static async CreateItem(p: CreateSellItemModel): Promise<SellItemModel | undefined>{
        const token = await GetAccessToken();
        const files = p.files;
        p.files = [];
        const response = await SellItemApi.post<SellItemModel>("/", p, {headers: { Authorization: `Bearer ${token}` }});
        if (response.data) {
            const form = new FormData();
            files.forEach((f) => form.append(f.file.name, f.file));
            await SellItemApi.put("/files-upload", {files: form})
        }
        return;
    }

    public static async GetAllSellItems() : Promise<SellItemModel[]>
    {
        let items: SellItemModel[] = [];
        await SellItemApi.get<SellItemModel[]>("/?takeCount=20").then((res) => {
          if (IsApiError(res)) {
            console.log(res.title);
          }
          items = res.data;
        });

        return items;
    }
}

export async function GetAccessToken(): Promise<string> {
    const cookiesProvider = new Cookies();
    let accessToken = cookiesProvider.get<string>(CookiesConstants.SellItemAccessToken);
    if (!accessToken) {
        const userCookie = cookiesProvider.get<UserModel>(CookiesConstants.UserCookie);
        if (!userCookie)
        {
            console.error("User not authorized");
        }

        await SellItemBaseAPi.get<string>("/token?email=" + userCookie.email + "&refreshToken=" + encodeURIComponent(userCookie.refreshToken))
        .then((res) => {
            accessToken = res.data;
            const expirationDate = DateTime.local().plus({minutes: CookiesConstants.UserExpirationTimeInMinutes});
            cookiesProvider.set(CookiesConstants.SellItemAccessToken, accessToken, {expires: expirationDate.toJSDate() });
        })
        .catch((e: AxiosError<ApiResponseModel>) => {
            console.log("Error accursed while trying to access sell item service:\n" + e.response?.data.title);
        })
    }
    return accessToken;
}


import { AxiosError } from "axios";
import { UserClient } from "../API/User/UserApi";
import { ApiResponseModel } from "../Models/ApiResponseModel";
import { UserModel } from "../Models/User/IUser";
import { LoginUserModel } from "../Models/User/LoginUser";
import { RegisterUserModel } from "../Models/User/RegisterUser";
import { CookiesConstants } from "../Views/CookiesConstants";
import { CookieService } from "./CookieDecoderService";
import {DateTime} from "ts-luxon";

export abstract class UserService
{
    private static isError(object: any): object is ApiResponseModel {
        return 'status' in object;
    }

    public static async LoginUser(loginUser: LoginUserModel): Promise<string | undefined> {
        
        let error: undefined | string = undefined;
        await UserClient.post<UserModel>("/login", loginUser).then((res) => {
            if (UserService.isError(res)){
                error = res.title;
            }
            const expirationDate = DateTime.local().plus({minutes: CookiesConstants.UserExpirationTimeInMinutes});
            CookieService.SetCookie(CookiesConstants.UserCookie, res.data, {expires: expirationDate.toJSDate()})
            
        })
        .catch((e: AxiosError<ApiResponseModel>) => {
            error = e.response?.data.title;
        })

        return error;
    }

    public static async RegisterUser(registerUser: RegisterUserModel): Promise<string | undefined> {
        let error: undefined | string = undefined;
        await UserClient.post<UserModel>("/register", registerUser).then((res) => {
            if (UserService.isError(res)){
                error = res.title;
            }

            const expirationDate = DateTime.local().plus({minutes: CookiesConstants.UserExpirationTimeInMinutes});
            CookieService.SetCookie(CookiesConstants.UserCookie, res.data, {expires: expirationDate.toJSDate()})
        
          })
          .catch((e: ApiResponseModel) => {
            error = e.title;
          });

        return error;
    }
}

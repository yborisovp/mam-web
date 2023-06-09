import { Cookies } from "react-cookie";
import { CookieGetOptions, CookieSetOptions} from "universal-cookie";
import { CookiesConstants } from "../Views/CookiesConstants";

export abstract class CookieService {
    static RemoveAllCookies() {
        const cookieProvider = new Cookies();
        cookieProvider.remove(CookiesConstants.UserCookie);
        cookieProvider.remove(CookiesConstants.SellItemAccessToken)
    }
    public static CheckCookie(name: string, options?: CookieGetOptions | undefined) : boolean {
        const cookieProvider = new Cookies();
        const cookie = cookieProvider.get(name, options);
        if (cookie !== null || cookie !== undefined) {
            return true;
        }
        return false;
    }

    public static SetCookie<Type>(name: string, data: Type, options?: CookieSetOptions | undefined) {
        const cookieProvider = new Cookies();
        cookieProvider.set(name, data, options);
    }

    public static DecodeCookie<Type>(name: string, options?: CookieGetOptions | undefined): Type {
        const cookieProvider = new Cookies();
        const cookie = cookieProvider.get<Type>(name, options);
        return cookie;
    }
}

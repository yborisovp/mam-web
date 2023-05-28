import { UserClient } from "../API/User/UserApi";
import { UserModel } from "../Models/User/IUser";
import { LoginUserModel } from "../Models/User/LoginUser";
import { RegisterUserModel } from "../Models/User/RegisterUser";

export abstract class UserService
{
    public static async LoginUser(loginUser: LoginUserModel): Promise<boolean> {
        let state = false;
        const response = await UserClient.post<UserModel>("/login", loginUser);
        if (response.data)
        {
            localStorage.setItem("user", JSON.stringify(response.data))
            state = true;
        }

        return state;
    }

    public static RegisterUser(registerUser: RegisterUserModel): boolean {
        let state = false;
        UserClient.post<UserModel>("/register", registerUser).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data))
            state = true;
          })
          .catch((e) => {
            console.log(e);
          });

        return state;
    }
}

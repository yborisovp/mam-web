export interface RegisterUserModel {
    $type: "PasswordRegistration";
    name: string;
    secondName: string;
    phone: string,
    email: string;
    password: string;
}

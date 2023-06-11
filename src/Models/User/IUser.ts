export interface UserModel {
    fullName: string;
    email: string;
    registrationDate: Date;
    lastEnteredAt: Date;
    accessToken: string;
    refreshToken: string;
}

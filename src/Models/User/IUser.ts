export interface UserModel {
    id: number,
    fullName: string;
    email: string;
    registrationDate: Date;
    lastEnteredAt: Date;
    accessToken: string;
    refreshToken: string;
    role: "Regular" | "Admin"
}

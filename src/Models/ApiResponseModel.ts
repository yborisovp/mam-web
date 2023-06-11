export interface ApiResponseModel {
    title: string,
    status: number
}

export const IsApiError = (object: any): object is ApiResponseModel => {
    return 'status' in object;
}

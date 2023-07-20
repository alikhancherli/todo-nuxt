export interface ApiResponse<T> {
    statusCode: number,
    message: string,
    isSuccess: Boolean,
    data?: T | null
}

export type AxiosOptions = {
    baseUrl: string,
    headers?: any | null,
    body?: any | null
}

export interface Todo {
    id: string,
    title: string,
    createdTimeUtc: string
}

export interface AccessToken {
    expirationTime: string,
    accessToken: string,
    tokenType: string
}

export interface AuthModel = {
    isAuthenticated: Boolean,
    data: AccessToken
}

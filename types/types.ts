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

export interface AuthModel {
    isAuthenticated: Boolean,
    data: AccessToken
}

export interface RegisterModel {
    id: number,
    fullName: string,
    email: string
}

enum Tags {
    None = 0,
    Bussines = 1,
    Favorite = 2,
    Life = 3,
    Entertainment = 4
}

export interface TodoItem {
    title: string,
    tag: string,
    todoItemRequests: TodoItemList[]
}

type TodoItemList = {
    title: string,
    note: string,
    reminder: string,
    priorityLevel: number
}


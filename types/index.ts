import {AxiosRequestConfig} from "axios";

export interface CategoryType {
    subCategories: any[],
    _id: string,
    title: string,
    slug: string
    thumbnail: string
}

export interface ResponseTypes {
    isLoaded: boolean,
    response: any
    error: any
    request: (params:AxiosRequestConfig) => void
}

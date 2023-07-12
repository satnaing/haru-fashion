import React, {useState} from 'react';
import axios, {AxiosRequestConfig} from "axios";
import {getCookie} from "cookies-next";
import {ApiRoutes} from "../enums/ApiRoutes";

const instance = axios.create({
    baseURL: ApiRoutes.BASE_URL,
});

axios.interceptors.request.use(req => {
    const cookie = getCookie("user") && JSON.parse(getCookie("user") as string)
    req.headers = {
        'Authorization': `Bearer ${cookie.token}`
    }
    return req;
});

axios.interceptors.response.use(
    res => res,
    err => {
        console.log(err)
    }
);

const UseFetch = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const request = (axiosParams:AxiosRequestConfig) => {
        instance.request(axiosParams)
            .then(response => {
                setIsLoaded(true);
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    };

    return {error, isLoaded, data, request}
};

export default UseFetch;

import React, {useState} from 'react';
import axios, {AxiosRequestConfig} from "axios";
import {getCookie} from "cookies-next";
import {ApiRoutes} from "../enums/ApiRoutes";
import {ResponseTypes} from "../types";
import {toast} from "react-toastify";

const instance = axios.create({
    baseURL: ApiRoutes.BASE_URL,
});

instance.interceptors.request.use(req => {
    const cookie = getCookie("user") && JSON.parse(getCookie("user") as string)
    req.headers = {
        'Authorization': `Bearer ${cookie.token}`
    }
    return req;
});

instance.interceptors.response.use(
    res => res,
    err => {
        console.log(err)
    }
);

const UseFetch = () => {
    const [response, setResponse] = useState({
        response: null,
        isLoaded: false,
        error: null,
    });

    const request = async (axiosParams:AxiosRequestConfig) => {
        try {
           const res = await instance.request(axiosParams)
           await setResponse({
                isLoaded: true,
                response: res.data,
                error: null
            })
            return Promise.resolve(res.data)
        }catch (e:any){
            setResponse({
                isLoaded: true,
                response: null,
                error: e
            });
            toast.error("خطا در درخواست",{
                theme:"colored",
                position:toast.POSITION.BOTTOM_CENTER
            })
            return Promise.reject(e.message)
        }
    };

    return {...response,request} as any
};

export default UseFetch;

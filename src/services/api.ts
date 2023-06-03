import axios from "axios"
import { IAddress, IUser } from "../ui/interfaces";

const apiBase = axios.create({
    baseURL: " http:// 192.168.0.104:3000/"
    //baseURL: " http://192.168.1.8:3000/"
    // baseURL: " http://192.168.1.2:3000/"
})

export const getUsers = async () => {
    try {
        const response = await apiBase.get(`users`);
        
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const postUsers = async (data: IUser) => {
    try {
        const response = await apiBase.post(`users`, data);
        
        if(response.status >= 200 || response.status < 300){
            return "success post";
        }
    } catch (error) {
        return "failed request";
    }
}


export const createAddress = async (data: IAddress) => {
    try {
        const response = await apiBase.post(`addresses`, data);
        
        if(response.status >= 200 || response.status < 300){
            return "success post";
        }
    } catch (error) {
        return "failed request";
    }
}

export const patchUsers = async (id: number, data: {}) => {
    try {
        const response = await apiBase.patch(`users/${id}`, data);
        
        if(response.status >= 200){
            return "success patch";
        }
    } catch (error) {
        return "failed request";
    }
}

export const postLogin = async (data: IUser) => {
    try {
        const response = await apiBase.post(`login`, data);
        
        if(response.status >= 200 || response.status < 300){
            return "success post";
        }
    } catch (error) {
        return "failed request";
    }
}
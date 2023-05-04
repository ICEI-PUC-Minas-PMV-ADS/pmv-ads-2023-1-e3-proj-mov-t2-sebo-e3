import axios from "axios"
import { IUser } from "../ui/interfaces";

const apiBase = axios.create({
    baseURL: " http://192.168.1.11:3000/"
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

export const putUsers = async (data: IUser) => {
    try {
        const response = await apiBase.put(`users/${data.id}`, data);
        
        if(response.status >= 200){
            return "success put";
        }
    } catch (error) {
        return "failed request";
    }
}
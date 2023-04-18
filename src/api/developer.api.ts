import { Developer } from "@/interfaces";
import { api } from "./api";


const basePath = '/developer';

export const getAllDevelopers = () => api.get<Developer[]>(`${ basePath }`);
export const getDeveloper = (id: number) => api.get<Developer>(`${ basePath }/${ id }`);
export const createDeveloper = (developer: Developer) => api.post<Developer>(`${ basePath }`, developer);
export const updateDeveloper = (id: number, developer: Partial<Developer>) => api.put<Developer>(`${ basePath }/${ id }`, developer);
export const deleteDeveloper = (id: number) => api.delete<void>(`${ basePath }/${ id }`);
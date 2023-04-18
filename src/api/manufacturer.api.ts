import { Manufacturer } from "@/interfaces";
import { api } from "./api";


const basePath = '/manufacturer';

export const getAllManufacturers = () => api.get<Manufacturer[]>(`${ basePath }`);
export const getManufacturer = (manufacturerId: number) => api.get<Manufacturer>(`${ basePath }/${ manufacturerId }`);
export const createManufacturer = (manufacturer: Manufacturer) => api.post<Manufacturer>(`${ basePath }`, manufacturer);
export const updateManufacturer = (id: number, manufacturer: Partial<Manufacturer>) => api.put<Manufacturer>(`${ basePath }/${ id }`, manufacturer);
export const deleteManufacturer = (id: number) => api.delete<void>(`${ basePath }/${ id }`);
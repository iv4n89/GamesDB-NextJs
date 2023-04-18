import { Publisher } from "@/interfaces";
import { api } from "./api";


const basePath = '/publisher';

export const getAllPublishers = () => api.get<Publisher[]>(`${ basePath }`);
export const getPublisher = (id: number) => api.get<Publisher>(`${ basePath }/${ id }`);
export const createPublisher = (publisher: Publisher) => api.post<Publisher>(`${ basePath }`, publisher);
export const updatePublisher = (id: number, publisher: Partial<Publisher>) => api.put<Publisher>(`${ basePath }/${ id }`, publisher);
export const deletePublisher = (id: number) => api.delete<void>(`${ basePath }/${ id }`);
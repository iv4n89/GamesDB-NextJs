
import { Console } from "@/interfaces";
import { api } from "./api";


const basePath = '/console';

export const getAllConsoles = () => api.get<Console[]>(`${ basePath }`);
export const getConsole = (consoleId: number) => api.get<Console>(`${ basePath }/${ consoleId }`);
export const createConsole = (manufacturerId: number, console: Console) => api.post<Console>(`${ basePath }/manufacturer/${ manufacturerId }`, console);
export const updateConsole = (consoleId: number, console: Partial<Console>) => api.put<Console>(`${ basePath }/${ consoleId }`, console);
export const deleteConsole = (consoleId: number) => api.delete<void>(`${ basePath }/${ consoleId }`);
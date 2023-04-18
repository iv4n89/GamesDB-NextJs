import { Role } from "@/interfaces";
import { api } from "./api";


const basePath = '/role';

export const getAllRoles = () => api.get<Role[]>(`${ basePath }`);
export const getRole = (id: number) => api.get<Role>(`${ basePath }/${ id }`);
export const createRole = (role: Role) => api.post<Role>(`${ basePath }`, role);
export const updateRole = (id: number, role: Partial<Role>) => api.patch<Role>(`${ basePath }/${ id }`, role);
export const deleteRole = (id: number) => api.delete(`${ basePath }/${ id }`);
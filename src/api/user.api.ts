import { User } from "@/interfaces";
import { api } from "./api";


const basePath = '/user';

export const createUser = (user: User) => api.post<User>(`${ basePath }`, user);
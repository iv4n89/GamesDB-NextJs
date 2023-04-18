import { Collection, Following } from "./Collection.interface";

export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    birthDate?: Date;
    username: string;
    password?: string;
    collection?: Collection;
    role?: Role;
    followings?: Following[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Role {
    id: number;
    name: string;
    isAdmin?: 0 | 1;
    users?: User[];
    createdAt?: Date;
    updatedAt?: Date;
}
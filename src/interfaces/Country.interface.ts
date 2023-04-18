import { Developer } from "./Developer.interface";
import { Manufacturer } from "./Manufacturer.interface";


export interface Country {
    id: number;
    name: string;
    developers?: Developer[];
    manufacturers?: Manufacturer[];
    createdAt?: Date;
    updatedAt?: Date;
}
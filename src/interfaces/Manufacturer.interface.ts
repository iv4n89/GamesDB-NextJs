import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { Console } from "./Console.interface";
import { Country } from "./Country.interface";

export interface Manufacturer {
    id: number;
    name: string;
    history?: string;
    consoles?: Console[];
    country?: Country;
    createdAt?: Date;
    updatedAt?: Date;
}
import { Country } from "./Country.interface";
import { Game } from "./Game.interface";

export interface Developer {
    id: number;
    name: string;
    games?: Game[];
    country?: Country;
    createdAt?: Date;
    updatedAt?: Date;
}
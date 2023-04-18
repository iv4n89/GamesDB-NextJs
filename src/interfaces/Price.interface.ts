import { Console } from "./Console.interface";
import { Game } from "./Game.interface";

export interface Price {
    id: number;
    price: number;
    currency?: string;
    consoles?: Console[];
    games?: Game[];
    createdAt?: Date;
    updatedAt?: Date;
}
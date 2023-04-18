import { Console } from "./Console.interface";
import { Game } from "./Game.interface";

export interface Zone {
    id: number;
    name: string;
    consoles?: Console[];
    games?: Game[];
    createdAt?: Date;
    updatedAt?: Date;
}
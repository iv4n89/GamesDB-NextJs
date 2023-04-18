import { ConsoleOwn, GameOwn } from "./Collection.interface";
import { Console } from "./Console.interface";
import { Game } from "./Game.interface";

export interface Tag {
    id: number;
    name: string;
    color: string;
    consoles?: Console[];
    games?: Game[];
    consoleOwns?: ConsoleOwn[];
    gameOwns?: GameOwn[];
    createdAt?: Date;
    updatedAt?: Date;
}
import { Game } from "./Game.interface";

export interface Publisher {
    id: number;
    name: string;
    games?: Game[];
    createdAt?: Date;
    updatedAt?: Date;
}
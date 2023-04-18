import { Following, GameOwn } from "./Collection.interface";
import { Developer } from "./Developer.interface";
import { Price } from "./Price.interface";
import { Publisher } from "./Publisher.interface";
import { Tag } from "./Tag.interface";
import { Zone } from "./Zone.interface";

export interface Game {
    id: number;
    name: string;
    description?: string;
    developer?: Developer;
    publisher?: Publisher;
    genres?: Genre;
    console?: Console;
    gameOwns?: GameOwn[];
    prices?: Price[];
    lastPrice?: Price;
    followings?: Following[];
    isSpecialEdition?: 0 | 1;
    zone?: Zone;
    tags?: Tag[];
}

export interface Genre {
    id: number;
    name: string;
    games?: Game[];
    createdAt?: Date;
    updatedAt?: Date;
}
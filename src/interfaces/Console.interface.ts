import { Following } from "./Collection.interface";
import { Game } from "./Game.interface";
import { Manufacturer } from "./Manufacturer.interface";
import { Price } from "./Price.interface";
import { Tag } from "./Tag.interface";
import { Zone } from "./Zone.interface";

export interface Console {
    id: number;
    name: string;
    description?: string;
    history?: string;
    launchDate?: Date;
    retirementDate?: Date;
    otherNames?: string[];
    isSpecialEdition?: 0 | 1;
    prices?: Price[];
    lastPrice?: Price;
    followings?: Following[];
    games?: Game[];
    manufacturer?: Manufacturer;
    type?: ConsoleType;
    zone?: Zone;
    tags?: Tag[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ConsoleType {
    id: number;
    name: string;
    consoles?: Console[];
    createdAt?: Date;
    updatedAt?: Date;
}
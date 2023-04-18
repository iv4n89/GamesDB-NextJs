import { Console } from "./Console.interface";
import { Game } from "./Game.interface";
import { Tag } from "./Tag.interface";
import { User } from "./User.interface";

export interface Collection {
    id: number;
    user: User;
    consoles?: Console[];
    games?: Game[];
    consoleOwns?: ConsoleOwn[];
    gameOwns?: GameOwn[];
    createdAt: Date;
    updatedAt: Date;
}

export enum State {
    Perfect = 'perfect',
    Very_good = 'very good',
    Good = 'good',
    Acceptable = 'acceptable',
    Not_so_good = 'not so good',
}

export enum GameStatus {
    Not_played = 'not played',
    To_start = 'to start',
    Started = 'started',
    Playing = 'playing',
    Paused = 'paused',
    Droped = 'droped',
    Completed = 'completed',
    Dominated = 'dominated',
}

export interface ConsoleOwn {
    id: number;
    console: Console;
    collection: Collection;
    tags?: Tag[];
    pricePaid?: number;
    dateBuyed?: Date;
    hasBox?: 0 | 1;
    hasManual?: 0 | 1;
    state?: State;
    favorite?: 0 | 1;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface GameOwn {
    id: number;
    game: Game;
    collection: Collection;
    tags?: Tag[];
    pricePaid?: number;
    dateBuyed?: Date;
    hasBox?: 0 | 1;
    hasManual?: 0 | 1;
    hoursPlayed?: number;
    state?: State;
    status?: GameStatus;
    favorite?: 0 | 1;
    createdAt?: number;
    updatedAt?: number;
}

export interface Following {
    id: number;
    game?: Game;
    console?: Console;
    lastPriceDate?: Date;
    lastPriceAmount?: number;
    lastNotificationDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
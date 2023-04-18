import { Game } from "@/interfaces";
import { api } from "./api";


const basePath = '/game';

export const getAllGames = () => api.get<Game[]>(`${ basePath }`);
export const getAllConsoleGames = (consoleId: number) => api.get<Game[]>(`${ basePath }/console/${ consoleId }`);
export const getGame = (gameId: number) => api.get<Game>(`${basePath}/${ gameId }`);
export const getGameByName = (name: string) => api.get<Game>(`${ basePath }/name/${ name }`);
export const getGameBySlug = (slug: string) => api.get<Game>(`${ basePath }/slug/${ slug }`);
export const createGame = (consoleId: number, game: Game) => api.post<Game>(`${ basePath }/console/${ consoleId }`, game);
export const updateGame = (gameId: number, game: Partial<Game>) => api.put<Game>(`${ basePath }/${ gameId }`, game);
export const deleteGame = (gameId: number) => api.delete<void>(`${ basePath }/${ gameId }`);
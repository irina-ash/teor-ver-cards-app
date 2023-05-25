import { ISuit } from "./suit";

export interface ICard {
    id: number;
    suit: ISuit;
    value: string;
}
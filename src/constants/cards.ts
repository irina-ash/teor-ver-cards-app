import { ICard } from "../types/card";
import { ISuit } from "../types/suit";

/** Масти */
export const suits: ISuit[] = [{
    name: "diamonds",
    color: "red",
    symbol: "♦",
}, {
    name: "clubs",
    color: "black",
    symbol: "♣",
}, {
    name: "hearts",
    color: "red",
    symbol: "♥",
}, {
    name: "spades",
    color: "black",
    symbol: "♠",
}];

/** Номинал */
export const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Валет",
    "Дама",
    "Король",
    "Туз"
];

/** Колода из 36 карт */
export const cards: ICard[] = suits.map(s => values.map(v => ({
    suit: s,
    value: v,
}))).flat().map((c, index) => ({...c, id: index + 1}));
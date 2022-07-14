export enum mealType {
    Dejeuner = '08:00:00',
    DixHeure = '10:00:00',
    Diner = '12:00:00',
    SeizeHeure = '16:00:00',
    Souper = '18:00:00'
}

export interface meal {
    id?: string,
    date: string,
    moment: mealType,
    content: string,
    rating?: number,
    remarque?: string
}

export interface event {
    id: string,
    title: string,
    start: string,
    extendedProps: meal
}

export interface poids {
    id?: string,
    date: string,
    poids: number;
    difference?: number;
    remarque?: string
}
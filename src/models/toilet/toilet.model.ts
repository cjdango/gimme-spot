export interface Toilet {
    key?: string;
    name: string;
    owner: string;
    description: string;
    price: number;
    location?: {x: number, y: number};
}
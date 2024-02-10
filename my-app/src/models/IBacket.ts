export interface IProduct {
    id: number;
    name: string;
}
export interface IDish {
    id: number;
    name: string;
    price: number;
    productList: IProduct[]
}



export interface IBacket {
    id: number;
    dishes: IDish[]
}
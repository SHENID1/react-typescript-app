export interface IAddress {
    street: string;
    city: string;
    zipcode: string;

}

export interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    address: IAddress;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
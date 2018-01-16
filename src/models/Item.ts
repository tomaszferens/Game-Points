export interface CartState {
    [id: number]: number
}

export interface ItemState {
    [id: string]: {
        name: string
        price: number
    }
}

export interface Item {
    name: string
    price: number
    id: string
}

export interface Order {
    amount: number
    price: number
    name: string
    id: string
}

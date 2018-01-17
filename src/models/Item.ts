export interface CartState {
    [id: number]: number
}

export interface ItemState {
    [id: string]: {
        name: string
        price: number
        imgUrl: string
    }
}

export interface DiscountsState {
    [id: string]: {
        itemId: string
        for: string
        get: string
    }
}

export interface Item {
    name: string
    price: number
    id: string
    imgUrl: string
}

export interface Order {
    amount: number
    price: number
    name: string
    id: string
    imgUrl: string
}

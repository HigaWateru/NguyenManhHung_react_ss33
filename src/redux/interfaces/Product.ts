export interface Product {
    id: number
    name: string
    image?: string
    description?: string
    price: number
    quantity: number
}
export interface typeAction {
    type: string,
    payload: string | number
}
export interface Product {
  id: number
  name: string
  image?: string
  description?: string
  price: number
  quantity: number
}

export interface CartItem extends Product {
  cartQuantity: number
}

export type typeAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "DELETE"; payload: number }
  | { type: "UPDATE"; payload: Product }
  | { type: "DECREASE"; payload: number}
  | { type: "CLEAR_MESSAGE", payload: string}
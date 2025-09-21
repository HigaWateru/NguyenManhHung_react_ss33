import type { CartItem, typeAction } from "../interfaces/Product"

const cartProducts: CartItem[] = JSON.parse(localStorage.getItem("cartProducts") || "[]")

const productsCartReducer = (state: CartItem[] = cartProducts, action: typeAction): CartItem[] => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const found = state.find(item => item.id === action.payload.id)
            if (found) {
                if (action.payload.quantity === 0) {
                    alert("Số lượng sản phẩm vượt quá số lượng trong kho")
                    return state
                }
                const updatedCart = state.map(item => item.id === action.payload.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item)
                localStorage.setItem("cartProducts", JSON.stringify(updatedCart))
                return updatedCart
            } else {
                if (action.payload.quantity <= 0) {
                    alert("Sản phẩm đã hết hàng")
                    return state
                }
                const newCart = [...state, { ...action.payload, cartQuantity: 1 }]
                localStorage.setItem("cartProducts", JSON.stringify(newCart))
                return newCart
            }
        }
        case "DELETE": {
            if(confirm('Are you sure want to delete ?')) {
                const newCart = state.filter(item => item.id !== action.payload)
                localStorage.setItem("cartProducts", JSON.stringify(newCart))
                return newCart
            }
            return state
        }
        default: return state
    }
}

export default productsCartReducer

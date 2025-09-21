import type { typeAction } from "../interfaces/Product"

const messageReducer = (state: string = "", action: typeAction): string => {
    switch (action.type) {
        case "ADD_TO_CART": return "Add to cart successfully"
        case "DELETE": return "Delete from cart successfully"
        case "CLEAR_MESSAGE": return ""
        default: return state
    }
}
export default messageReducer

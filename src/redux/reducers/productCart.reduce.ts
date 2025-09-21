import type { Product, typeAction } from "../interfaces/Product";

const cardProducts: Product[] = [
    {
        id: 4,
        name: 'Cake',
        price: 10,
        quantity: 15
    }, {
        id: 2,
        name: 'Hamburger',
        price: 15,
        quantity: 10
    }
]
const productsCardReducer = (state: Product[] = cardProducts, action: typeAction) => {
    switch(action.type) {
        case 'Update': return
        case 'Delete': return
        default: return state
    }
}
export default productsCardReducer
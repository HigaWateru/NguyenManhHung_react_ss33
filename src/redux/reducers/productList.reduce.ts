import type { Product, typeAction } from "../interfaces/Product";

const defaultProducts: Product[] = [
    {
        id: 1,
        name: 'Pizza',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmomF1DksRYo9MLTC6zi2qx1XjX7R5PSqPYQ&s',
        description: 'Lorem ipsum dolor sit amethud jidf sadgb dfeie dfegr jirgkd ahahaog asfbaldfe aydve dbfalief dfiegiyefg zibc ehfie wue xnzvbv ',
        price: 30,
        quantity: 0
    }, {
        id: 2,
        name: 'Hamburger',
        image: 'https://hidafoods.vn/wp-content/uploads/2023/09/hamburger-thit-bo-5.jpg',
        description: 'Lorem ipsum dolor sit amethud jidf sadgb dfeie dfegr jirgkd ahahaog asfbaldfe aydve dbfalief dfiegiyefg zibc ehfie wue xnzvbv ',
        price: 15,
        quantity: 4
    }, {
        id: 3,
        name: 'Bread',
        image: 'https://thatbreadlady.com/wp-content/uploads/2020/10/french-bread.jpg',
        description: 'Lorem ipsum dolor sit amethud jidf sadgb dfeie dfegr jirgkd ahahaog asfbaldfe aydve dbfalief dfiegiyefg zibc ehfie wue xnzvbv ',
        price: 20,
        quantity: 1
    }, {
        id: 4,
        name: 'Cake',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioUzNMKaVks1gJIQLIPutuGmQ-0WYrzn69w&s',
        description: 'Lorem ipsum dolor sit amethud jidf sadgb dfeie dfegr jirgkd ahahaog asfbaldfe aydve dbfalief dfiegiyefg zibc ehfie wue xnzvbv ',
        price: 10,
        quantity: 1
    }
]

const products: Product[] = JSON.parse(localStorage.getItem("products") || "null") || defaultProducts

const productListReducer = (state: Product[] = products, action: typeAction) => {
    switch(action.type) {
        case "DECREASE": {
            return state.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
        }
        default: 
            return state
    }
}
export default productListReducer
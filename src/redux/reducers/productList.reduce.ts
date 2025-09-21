import type { Product, typeAction } from "../interfaces/Product";

const products: Product[] = [
    {
        id: 1,
        name: 'Pizza',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmomF1DksRYo9MLTC6zi2qx1XjX7R5PSqPYQ&s',
        description: 'Lorem ipsum dolor sit amen, consectetur adipisicing elit adag fdgrxgc rsrtd ewes asvgdrfdc retdjgd ancete auhcoe eifoseeijru',
        price: 30,
        quantity: 0
    }, {
        id: 2,
        name: 'Hamburger',
        image: 'https://hidafoods.vn/wp-content/uploads/2023/09/hamburger-thit-bo-5.jpg',
        description: 'Lorem ipsum dolor sit amen, consectetur adipisicing elit adag fdgrxgc rsrtd ewes asvgdrfdc retdjgd ancete auhcoe eifoseeijru',
        price: 15,
        quantity: 4
    }, {
        id: 3,
        name: 'Bread',
        image: 'https://thatbreadlady.com/wp-content/uploads/2020/10/french-bread.jpg',
        description: 'Lorem ipsum dolor sit amen, consectetur adipisicing elit adag fdgrxgc rsrtd ewes asvgdrfdc retdjgd ancete auhcoe eifoseeijru',
        price: 20,
        quantity: 1
    }, {
        id: 4,
        name: 'Cake',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioUzNMKaVks1gJIQLIPutuGmQ-0WYrzn69w&s',
        description: 'Lorem ipsum dolor sit amen, consectetur adipisicing elit adag fdgrxgc rsrtd ewes asvgdrfdc retdjgd ancete auhcoe eifoseeijru',
        price: 10,
        quantity: 1
    }
]

const productListReducer = (state: Product[] = products, action: typeAction) => {
    switch(action.type) {
        case "": return
        default: return state
    }
}
export default productListReducer
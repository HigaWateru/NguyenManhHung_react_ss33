import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/reducers"
import type { Product } from "../redux/interfaces/Product"

export default function ListProduct() {
    const products = useSelector((state: RootState) => state.productList)
    const dispatch = useDispatch()
    const handleAdd = (product: Product) => {
        if(product.quantity <= 0) {
            alert("Sản phẩm đã hết hàng")
            return
        }
        dispatch({type: 'ADD_TO_CART', payload: product})
        dispatch({type: 'DECREASE', payload: product.id})
    }
    return(
        <div className="border w-[900px] rounded border-blue-600 overflow-hidden flex flex-col">
            <h1 className="w-full bg-blue-600 text-white p-3">List Product</h1>
            <div className="w-full p-3">
                <ul className="flex flex-col gap-8">
                    {products?.map(product => (
                        <li key={product.id} className="flex gap-5">
                            <div><img src={product.image} alt="none" className="w-[150px] h-[120px] object-cover"/></div>
                            <div className="flex flex-col">
                                <h2 className="text-[18px] font-medium">{product.name}</h2>
                                <p className="text-[16px] max-w-150">{product.description}</p>
                            </div>
                            <div className="relative w-[80px] flex justify-center ">
                                <div className={`absolute top-2 text-[14px] border px-5 py-0.5 ${product.quantity ? '' : 'hidden'}`}>{product.quantity}</div>
                                <button onClick={() => handleAdd(product)} className={`absolute bottom-0 px-2 py-1 text-white ${product.quantity ? ' bg-amber-500 cursor-pointer' : 'bg-[#cacaca] cursor-no-drop'}`}>{product.price} USD</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
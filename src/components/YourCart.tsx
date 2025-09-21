import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/reducers"

export default function YourCart() {
    const productsCart = useSelector((state: RootState) => state.productsCart)
    const messenge = useSelector((state: RootState) => state.messenge)
    const dispatch = useDispatch()
    const handleDelete = (id: number) => dispatch({type: 'DELETE', payload: id})
    return(
        <div className="w-[600px] flex flex-col gap-6">
            <div className="border w-full rounded border-red-600 overflow-hidden flex flex-col">
                <h1 className="w-full bg-red-600 text-white p-3">Your Cart</h1>
                <div className="w-full p-3">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-b-gray-500 ">
                                <th className=" py-3">STT</th>
                                <th className="text-left">Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsCart?.length === 0 ? <tr><td className="font-medium text-[14px] py-3 px-5" colSpan={5}>Empty product in your cart</td></tr> : productsCart?.map((product, index) => (
                                <tr key={product.id} className="border-b border-b-gray-500 ">
                                    <td className="text-center py-3">{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td className="text-center">{product.price} USD</td>
                                    <td className="text-center font-medium">{product.cartQuantity}</td>
                                    <td className="text-center">
                                        <div className="flex justify-center gap-3">
                                            <button className="font-medium text-[12px] px-1 text-white bg-[#5bc0de] rounded cursor-pointer">Update</button>
                                            <button onClick={() => handleDelete(product.id)} className="font-medium text-[12px] px-1 text-white bg-[#d9534f] rounded cursor-pointer">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            {productsCart?.length !== 0 ? <tr>
                                <td colSpan={4} className="px-2 py-3">There are <span className="font-medium">{productsCart?.length}</span> items in your shopping cart</td>
                                <td className="text-center font-medium text-red-500">{productsCart?.reduce((sum, product) => sum + product.price * product.cartQuantity, 0)} USD</td>
                            </tr> : ''}
                        </tfoot>
                    </table>
                </div>
            </div>
            {messenge && (<div className={`w-full p-3 rounded ${messenge.includes("Add") ? 'bg-[#dff0d8] text-green-700' : 'bg-[#f2dede] text-red-700'}`}>{messenge.includes("Add") ? 'Update' : 'Delete'} cart successfully</div>)}
        </div>
    )
}
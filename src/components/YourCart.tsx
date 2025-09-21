import { useSelector } from "react-redux"
import type { RootState } from "../redux/reducers"

export default function YourCart() {
    const productsCard = useSelector((state: RootState) => state.productsCard)
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
                            {productsCard?.map((product, index) => (
                                <tr key={product.id} className="border-b border-b-gray-500 ">
                                    <td className="text-center py-3">{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td className="text-center">{product.price} USD</td>
                                    <td className="text-center font-medium">{product.quantity}</td>
                                    <td className="text-center">
                                        <div className="flex justify-center gap-3">
                                            <button className="font-medium text-[12px] px-1 text-white bg-[#5bc0de] rounded cursor-pointer">Update</button>
                                            <button className="font-medium text-[12px] px-1 text-white bg-[#d9534f] rounded cursor-pointer">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pt-3">
                        <p>There are <span>2</span> items in your shopping cart</p>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#dff0d8] text-green-700 p-3 rounded">Add to cart successfully</div>
        </div>
    )
}
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart1 =() =>{  

    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();

    const clearHandler=() =>{
        dispatch(clearCart())
    }
return(
    <div>
        <h3 className="font-bold text-2xl my-2  text-center">Cart</h3>
        <div className="bg-red-300 p-2 w-28 cursor-pointer border-red-950 border -2 rounded text-lg" onClick={clearHandler}>Clear Cart</div>
            <div className="w-6/12 m-auto">
            <hr/>
            <ItemList data={cartItems} />
            </div>

    </div>
)
}

export default Cart1;
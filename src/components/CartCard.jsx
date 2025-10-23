//SCCS - Project 1

import QuantityCounter from "./QuantityCounter";
import { useState, useEffect } from "react";

export default function CartCard(props) {
    //console.log(props.cartInfo)

    const cartData = props.cartInfo;
    const addToCart = props.addCart; 
    const removeCart = props.removeCart;

    const [itemTotal, setItemTotal] = useState(
        "$"+parseFloat(cartData.quantity.toFixed(2) * Number(cartData.price.toString().slice(1))).toFixed(2),
    )

    /*
        unsure if useEffect was class material, I found it here:
        https://react.dev/learn/synchronizing-with-effects

        I was trying to find a way to have my item total be updated immediately
        and it was not liking me doing it through the onClick() function.

        I was googling for a while trying to find a solution and that is where
        I ended up going to, which worked upon trying it
    */
    useEffect(() => {
        //console.log("QUANTITY INSIDE OF USEEFFECT FUNCITON: " + cartData.quantity);
        var newVal = parseFloat(cartData.quantity.toFixed(2) * Number(cartData.price.toString().slice(1))).toFixed(2)        
        setItemTotal("$"+newVal)
    }, [cartData])
    
    return <div className="CartCard" onClick={()  => {
        //console.log(itemTotal)
        //updating the total price        
        //console.log("QUANTITY: " + cartData.quantity + " | PRICE: " + Number(cartData.price.toString().slice(1)))
    
        addToCart(props.prodQuantity, cartData.id);
    }}>
        <table>
            <td className="CartCardInfo">
                <img src={cartData.image} alt="" />
                <p>{cartData.productName}</p>
                <p>{cartData.price}</p>
                <QuantityCounter prodID={cartData.id} prodQuantity={props.prodQuantity} addQuantity={props.addQuantity} />
            </td>
            <td>
                <h3>Total: {itemTotal}</h3>
                <button className="RemoveButton" onClick={() => {
                    removeCart(cartData.id);
                }}>Remove</button>
            </td>
        </table>        
    </div>
}
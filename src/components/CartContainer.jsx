//SCCS - Project 1

import { useEffect, useState } from "react";
import CartCard from "./CartCard";

export default function CartContainer(props) { 
    
    const [totalVal, setTotalVal] = useState(0);

    //console.log({props})
    const cartData = props.cartData;
    const productQuantites = props.prodQuantity;
    const removeCart = props.removeCart;
    const clearCart = props.clearCart;

    /*
        this is a very roundabout solution to this problem, so I will try and explain:
        (I have a habbit of coding very strangely, this is also helpful because I won't
        remeber how I did this tomorrow morning)

        I have the cartData, which is an array containing all the related info for each item.
        said related info also includes the quantity and the price of each product.

        the quantity will change as you select / deselect items so that is what I am using here:
    */
    const total = cartData.map((product) => {
        //if there is a quantity to use...
        if(product.quantity > 0){
            //I am returning the value / total of all the product (this is for each item)
            return Number(product.quantity) * Number(product.price.toString().slice(1))
        }
    })
    //console.log("TOTAL: " + total)

    //then I am making a "temporary" variable for calculations, as the total above turns it
    //into an array of totals (one "slot" for each item's total)
    //said temporary value becomes 0, as this will only execute when something is updated
    var tempVal = 0.0;
    tempVal.toFixed(2);

    //I then itterate through each item's total, and add it to the "temporary" variable
    total.forEach(i => {
        tempVal += Number(i)
    });

    //the use effect is here so it doesn't immediatly brick
    // itself by calling this a gazillion times
    useEffect(() => {
        //I then use the set part of the useState made earlier, 
        // which updates the button's text below
        setTotalVal(tempVal)
    })

    //console.log("TEMPVAL: " + tempVal);

    const cartArr = cartData.map((cart) => {
        if(cart.quantity > 0) {
            //console.log(cart);
            return <CartCard 
                key={cart.id} 
                cartInfo={cart}
                allData={props.data}
                addQuantity={props.addQuantity} 
                prodQuantity = {productQuantites.find((match) => match.id === cart.id)}
                addCart = {props.addCart}
                removeCart={props.removeCart}
            />;
        }
    })


    return <div className="CartContainer">
        <h2>Cart Items: {props.productCount}</h2>
        <p>{(props.productCount == 0) ? ("Cart is Empty") : ("")}</p>


        {cartArr.map((cartOut) =>{
            return cartOut
        })}

        {(props.productCount == 0) ? 
        ("") : 
        (
            <div className="CartListBtns">
                <button className="RemoveButton" onClick={() => {
                    cartData.map((item) => {
                        //I don't really need to be liberal with this
                        //since everything is getting a quantity of 0

                        clearCart();
                        removeCart(item.id);
                    })
                }}>Empty Cart</button>
                <button id="BuyButton">Checkout 
                <br/> 
                ${totalVal /* I cannot get this to become *just* 2 decimal places 
                            for the life of me. It just becomes 00.00 instead 
                            of 0.00 for some reason I cannot find*/
                }
                </button>
                
            </div>

        )}
        
    </div>
}
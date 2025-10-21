//SCCS - Project 1

import CartCard from "./CartCard.jsx";


export default function CartContainer(props) {
    return <div className="CartContainer">
        <h2>Cart Items: {props.productCount}</h2>
        <p>{(props.productCount == 0) ? ("Cart is Empty") : ("")}</p>

        {props.cartData.forEach(i => {
            if(i.quantity > 0){
                //should one card but doesn't
                <CartCard id={i.id}/>

                {console.log("VALID PRODUCT")}
            }
            else{
                //console.log("INVALID PRODUCT");
            }
            
        })}
    </div>
}
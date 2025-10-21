//SCCS - Project 1

import QuantityCounter from "./QuantityCounter";

export default function ProductCard(props) 
{
    // console.log("ID: " + props.id);
    // console.log("NAME: " + props.productName);
    // console.log("BRAND: " + props.brand);
    // console.log("QUANTITY: " + props.quantity);
    // console.log("IMG: " + props.image);
    // console.log("PRICE: " + props.price);

    return <div className="ProductCard">
        <h3>{props.productName}</h3>
        <img src={props.image} alt="" />
        <p>{props.brand}</p>

        <QuantityCounter prodID={props.id} prodQuantity={props.prodQuantity} addQuantity={props.addQuantity}/>

        <p>{props.price}</p>

        <button id="cartButton" onClick={() => {props.addCart(props.prodQuantity, props.id)}}> Add to Cart </button>

        
    </div>

    
}

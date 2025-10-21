//SCCS - Project 1

import { UpdateProductAdding } from "./GroceriesAppContainer";

let quantityToAdd = 0;

export function NewQuantity() {
    //console.log("QUANTITY CALLED, ADDING: " + quantityToAdd);
    UpdateProductAdding(quantityToAdd);
}

export default function QuantityCounter(props) {
    //console.log(props.prodQuantity.quantity);
    const prodQuantity = props.addQuantity;

    return <div className="ProductQuantityDiv">
        <button onClick={() => {
            quantityToAdd = -1;        
            NewQuantity();

            prodQuantity(props.prodID);
            console.log("TO ADD: " + quantityToAdd);

        }}>-</button>
        <p>{props.prodQuantity.quantity}</p>
        <button onClick={() => {
            quantityToAdd = 1;
            NewQuantity();

            prodQuantity(props.prodID);
            console.log("TO ADD: " + quantityToAdd);
        }}>+</button>
    </div>
}
//SCCS - Project 1

import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { useState } from "react";


//amount added will change from 1 or -1 depending on what button is hit
let amountAdded = 0;
//this is for the "cart total" and subsequent cart icon
let productCount = 0;

//change how much is added each time
export function UpdateProductAdding(addingVal) {
    amountAdded = addingVal;

    return null;
}

export default function GroceriesAppContainer() {
    

    //use state for refreshing stuff
    const [productQuantity, setProdQuantity] = useState(
        products.map((product) => {
            return {
                id: product.id,
                "quantity": 0,
            }
        })
    )

    const [cartData, setCartData] = useState(
        products.map((product) => {
            return {
                id: product.id,
                image: product.image,
                price: product.price,
                "quantity": 0,
            }
        })
    )
    

    //add and update quantity
    const addToQuan = (prodID) => {
        //console.log(prodID);
        const newQuantity = productQuantity.map((product) => {
            //if its found...
            if(product.id === prodID){
                //console.log("FOUND");
                //not going < 0
                if(product.quantity + amountAdded > -1){
                    //return the product with an extra amount for the value
                    return {
                        ...product, quantity: product.quantity += amountAdded,
                        //...console.log("ADDING: " + amountAdded)
                    }
                }
                
            }
            //return the unchanged version
            return product;
        });

        //remake the array with the altered amounts
        setProdQuantity(newQuantity);
        return null;
    }

    const addToCart = (prodQuan, prodID) => {
        console.log("QUAN: " + prodQuan.quantity + " | ID: " + prodID);

        //make sure it will be adding something
        if(prodQuan.quantity > 0){
        const newCart = cartData.map((cart) => {
            //finding the one to add
            if(cart.id === prodID){
                return{
                    ...cart, quantity: prodQuan.quantity
                }
            }
            //unchanged
            return cart;
        })

        setCartData(newCart);

        console.log(newCart);
        return null;

    }
        
    }

    return <div>
        <NavBar className="NavDiv" appName="Groceries App" username="SCCS" productCount={productCount}/>
        <div className="GroceriesApp-Container">
            <ProductsContainer data={products} prodQuantity={productQuantity} addQuantity={addToQuan} addCart={addToCart}/>
            <CartContainer productCount={productCount} cartData={cartData} data={products}/>   
        </div>
    </div>
}
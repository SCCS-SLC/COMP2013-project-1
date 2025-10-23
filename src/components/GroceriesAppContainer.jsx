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

    //cart data stuff
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

        //console.log(newQuantity);
        //remake the array with the altered amounts
        setProdQuantity(newQuantity);
        return null;
    }

    const removeFromCart = (prodID) => {
        const newQuantity = productQuantity.map((product) => {
            //if its found...
            if(product.id === prodID){
                return {
                    ...product, quantity: product.quantity = 0,
                    //...console.log("ADDING: " + amountAdded)
                }
                
            }
            //return the unchanged version(s)
            return product;
        });

        //console.log(newQuantity);
        //remake the array with the altered amounts
        setProdQuantity(newQuantity);
        return null;
    }

    const clearCart = () => {
        //remake the data with 0 quantity
        const newCart = productQuantity.map((valProd) => {
            return {
                ...valProd, quantity: 0
            }            
        })
        //show 0 products
        productCount = 0;
        //reset cart data with the blank array
        setCartData(newCart);
        return null; 
    }

    const addToCart = (prodQuan, prodID) => {
        //console.log("QUAN: " + prodQuan.quantity + " | ID: " + prodID);       
            productCount = prodQuan.quantity;
                //comparing with the current quantities
                const newCart = productQuantity.map((valProd) => {
                    if(valProd.quantity > 0 || valProd.id === prodID ){
                        //get the stuff with quantities
                        const validCartData = products.map((product) => {
                            //if its the same as where I want to look at...
                            if(valProd.id === product.id){
                                //and its going to have a new quantity...
                                if(product.id === prodID){
                                    //make a new product, and define its quantity
                                    return {...product, quantity: prodQuan.quantity}
                                }
                                else{
                                    productCount += valProd.quantity
                                    //otherwise, use the qunatites previously set up
                                    return {...product, quantity:valProd.quantity}
                                }
                                
                            }
                        //and remove all of the undefined stuff 
                        //(the specific element I am searching for will always be in 0
                        //so I use [0] so it makes it a single thing, and not an array)
                        }).filter((valid) => valid != undefined)[0]
                        return{
                            ...validCartData
                        }
                    }
                    
                })

                //console.log(newCart);
                
                const filterCart = newCart.filter((correctCart) => {
                    //console.log("CORRECT CART: " + correctCart);
                    return correctCart != undefined
                });

                //console.log({filterCart});

                setCartData(filterCart);
                return null;    
        
    }

    return <div>
        <NavBar className="NavDiv" appName="Groceries App" username="SCCS" productCount={productCount}/>
        <div className="GroceriesApp-Container">
            <ProductsContainer data={products} prodQuantity={productQuantity} addQuantity={addToQuan} addCart={addToCart}/>
            <CartContainer productCount={productCount} cartData={cartData} data={products} addQuantity={addToQuan} prodQuantity={productQuantity} addCart={addToCart} removeCart={removeFromCart} clearCart={clearCart}/>   
        </div>
    </div>
}
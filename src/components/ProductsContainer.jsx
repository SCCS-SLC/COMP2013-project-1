import ProductCard from "./ProductCard";

export default function ProductsContainer(props) {
    const products = props.data;
    const productQuantites = props.prodQuantity;
    //console.log(products);

    let prodArr = products.map((product) => {
        //console.log(index);
        return <ProductCard 
            //{...console.log(product)}
            key={product.id} 
            {... product}
            prodQuantity = {productQuantites.find((match) => match.id === product.id)}
            addQuantity = {props.addQuantity}
            addCart = {props.addCart}
        />
    })


    return <div className="ProductsContainer">
        {prodArr.map((arrOut) => {
            return arrOut
        })}
    </div>
}
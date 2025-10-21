export default function NavBar(props) {
    return <div className="NavBar">
        <p>Hello, {props.username}</p>
        <p>{props.appName}</p>
        <img alt="" src={(props.productCount == 0) ? ("src/assets/cart-empty.png") : ("src/assets/cart-full.png") }></img>
    </div>
}
import React from "react";
import './cssFolder/Cart.css'
import CartItems from "./CartItems";

function Cart({cart}){
    let cartList = cart.map(crt => <CartItems key={crt.id} item={crt} />)

    const totalPrice = cart.reduce(
        (totalPrice, item) => totalPrice + item.price,
        0
       );

       console.log(totalPrice)

    return(
        <div className="cartLayout">
           <ul>{cartList}</ul>
           <h3>Total: ${totalPrice}.00</h3>
        </div>
    )
}


export default Cart;
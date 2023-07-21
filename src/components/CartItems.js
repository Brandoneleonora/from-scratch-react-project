import React from "react";
import './cssFolder/CartItems.css'


function CartItems({item}){
const {price, name} = item
    return (
        <div>
            <div className="itemRows">
                <h1>{name}</h1>
                <h1>${price}.00</h1>
            </div>
        </div>
    )
}


export default CartItems
import React from 'react'
import './cssFolder/shoppingItems.css'

function ShoppingItems({ item, handleDeleteItem, handleAddCart }){
    const { id, image, price, name } = item

    function handleDeleteClick(){
        fetch(`https://https-brandoneleonora-onrender-com.onrender.com/shoppingItems/${item.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleteItem(item))
        }

    function handleAddToCart(){
        fetch(`https://https-brandoneleonora-onrender-com.onrender.com/shoppingItems/${item.id}`)
        .then(r => r.json())
        .then((data) => handleAddCart(data))
    }

    

    return(
        <div className='toy' >
            <img src={image} alt='Item' className='imgSize'/>
            <div className='name'>
                <h3>{name}</h3>
                <span>Cost: ${price}.00</span>
            </div>
            <div className='btns'>
                <button onClick={handleDeleteClick}>Delete Item</button>
                <button className='btn2' onClick={handleAddToCart}>Add to Cart</button>
            </div>
            
        </div >
    )
}

export default ShoppingItems;
import React from 'react'


function ToyItems({ toy, handleDeleteItem }){
    const { id, image, likes,name } = toy

    function handleDeleteClick(){
        fetch(`http://localhost:4000/questions/${toy.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleteItem(toy))
        }

    console.log(id, image, likes, name)

    return(
        <div className='toy' >
            <img src={image} alt='Image of Toy' className='imgSize'/>
            <div className='name'>
                <h3>{name}</h3>
                <span>Likes: {likes}❤️</span>
            </div>
            
            <button onClick={handleDeleteClick}>Delete Toy</button>
        </div >
    )
}

export default ToyItems;
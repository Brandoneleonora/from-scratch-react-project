import React from 'react'


function ToyItems({ toy }){
    const { id, image, likes,name } = toy

    console.log(id, image, likes, name)

    return(
        <div className='toy' >
            <img src={image} alt='Image of Toy' className='imgSize'/>
            <div className='name'>
                <h3>{name}</h3>
                <span>Likes: {likes}❤️</span>
            </div>
            
            <button>Delete Toy</button>
        </div >
    )
}

export default ToyItems;
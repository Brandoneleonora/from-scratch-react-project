import React from 'react'


function ToyItems({ toy }){
    const { id, image, likes,name } = toy

    console.log(id, image, likes, name)

    return(
        <card key={id}>
            <img src={image} alt='Image of Toy' className='imgSize'/>
            <p>{name}</p>
            <button>Delete Toy</button>
        </card >
    )
}

export default ToyItems;
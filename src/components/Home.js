import React from 'react';
import './cssFolder/Home.css'


function Home({ shoppingList }){
    
    return(
        <div className='allToys'>
            <ul>{shoppingList}</ul>
        </div>
    )
}


export default Home;
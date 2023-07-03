import React from 'react'


function Home({ toyList }){
    return(
        <div className='allToys'>
            <h1>All Toys</h1>
            <ul>{toyList}</ul>
        </div>
    )
}


export default Home;
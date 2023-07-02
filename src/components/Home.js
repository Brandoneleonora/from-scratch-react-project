import React from 'react'


function Home({ toyList }){
    return(
        <section>
            <h1>All Toys</h1>
            <ul>{toyList}</ul>
        </section>
    )
}


export default Home;
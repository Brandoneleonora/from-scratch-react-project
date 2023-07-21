import React, {useState, useEffect} from "react";
import { Route, Switch} from 'react-router-dom'
import Home from "./Home";
import NavBar from "./NavBar";
import AddNewToy from "./Form"; 
import ShoppingItems from './shoppingItems';
import Cart from './Cart';


function App() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://https-brandoneleonora-onrender-com.onrender.com/shoppingItems')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  function onDeleteClicked(ty){
    setItems(items.filter(toy => toy.id !== ty.id))
  }

  function addToCart(cartItem){
    setCart([...cart, cartItem])
  }

  let itemList = items.map(item => <ShoppingItems key={item.id} item={item} handleDeleteItem={onDeleteClicked} handleAddCart={addToCart} />)


  function handleNewItem(item){
    setItems([...items, item])
  }
  

  console.log(cart)
  
  return (
   <div>
    <NavBar />
    <Switch>
      <Route exact path = '/cart'>
        <Cart cart={cart}></Cart>
      </Route>
      <Route exact path = '/form'>
        <AddNewToy onAddItem={handleNewItem} />
      </Route>
      <Route exact path = '/'>
        <Home shoppingList={itemList}/>
      </Route>
      
    </Switch>

   </div>
  );
}

export default App;

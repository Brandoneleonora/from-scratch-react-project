import React, {useState, useEffect} from "react";
import { Route, Switch} from 'react-router-dom'
import Home from "./Home";
import NavBar from "./NavBar";
import AddNewToy from "./Form"; 
import ToyItems from './ToyItems';

function App() {
  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch('https://https-brandoneleonora-onrender-com.onrender.com/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])


  let toyList = toys.map(toy => <ToyItems toy={toy} />)

  console.log(toys)
  return (
   <div>
    <NavBar />
    <Switch>
      <Route exact path = '/form'>
        <AddNewToy />
      </Route>
      <Route exact path = '/'>
        <Home toyList={toyList}/>
      </Route>
      
    </Switch>

   </div>
  );
}

export default App;

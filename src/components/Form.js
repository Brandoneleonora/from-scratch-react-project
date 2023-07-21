import React, {useState} from 'react'


function AddNewToy({onAddItem}){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: '',
      });

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleSubmit(event){
        event.preventDefault()
        fetch('https://https-brandoneleonora-onrender-com.onrender.com/shoppingItems', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "name": formData.name,
        "image": formData.image ,
        "price": parseInt(formData.price)
      }),
    })
    .then(r => r.json())
    .then(newItem => onAddItem(newItem))

        setFormData({
          name: "",
          image: "",
          price: '',
        })
      }

    return(
        <section>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            placeholder='0'
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          
        </label>
        <button type="submit">Add Item</button>
      </form>
    </section>
    )
}


export default AddNewToy
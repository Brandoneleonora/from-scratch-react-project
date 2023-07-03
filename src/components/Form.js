import React, {useState} from 'react'


function AddNewToy({onAddToy}){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        likes: 0,
      });

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleSubmit(event){
        event.preventDefault()
        fetch('https://https-brandoneleonora-onrender-com.onrender.com/toys', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "name": formData.name,
        "image": formData.image ,
        "likes": parseInt(formData.likes)
      }),
    })
    .then(r => r.json())
    .then(newToy => onAddToy(newToy))
      }

    return(
        <section>
      <h1>NewToy</h1>
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
          Likes:
          <input
            type='numbers'
            name="likes"
            value={formData.likes}
            onChange={handleChange}
          />
          
        </label>
        <button type="submit">Add Toy</button>
      </form>
    </section>
    )
}


export default AddNewToy
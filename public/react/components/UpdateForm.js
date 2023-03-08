import React, { useState } from 'react';
import apiURL from '../api';

export function UpdateForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {

      const res = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });

    alert(inputs);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Enter title:
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter price:
        <input 
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter description:
      <input 
        type="text" 
        name="description" 
        value={inputs.description || ""} 
        onChange={handleChange}
      />
      </label>
      <label>
      Pick a category:
      <select name="category" value={inputs.category || ""} onChange={handleChange}>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </label>
      <label>Enter image url:
      <input 
        type="text" 
        name="image" 
        value={inputs.image || ""} 
        onChange={handleChange}
      />
      </label>
        <button type='submit'>Update</button>
    </form>
  )
}
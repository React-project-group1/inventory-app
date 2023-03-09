import React, { useState } from 'react';
import apiURL from '../api';

export function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {

      const res = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });

    alert(inputs);
  }


  return (
    <div className='add-form'>
      <div>

      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-item'>
        <label>Enter title:</label>
        <input 
          type="text" 
          name="title" 
          value={inputs.title || ""} 
          onChange={handleChange}
          />
      </div>
      <div className='form-item'>
        <label>Enter price:</label>
        <input 
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
          />
      </div>
      <div className='form-item'>
        <label>Enter description:</label>
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
          />
      </div>
      <div className='form-item'>
        <label>Pick a category:</label>
          <select name="category" value={inputs.category || ""} onChange={handleChange}>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
      </div>
   
    <div className='form-item'>
      <label>Enter image url:</label>
      <input 
        type="text" 
        name="image" 
        value={inputs.image || ""} 
        onChange={handleChange}
        />
    </div>
      <br />
      <button className='button' type='submit'>Update</button>
    </form>
        </div>
   </div>
  )
}
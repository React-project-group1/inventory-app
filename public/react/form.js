import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <select name="selectedCategory">
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
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);
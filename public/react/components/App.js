import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemDetails } from './ItemDetails';
import { Form } from './form';
import logo from "../../assets/PBS.jpg"

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [itemDetails, setItemDetails] = useState('');
	const [form, setForm] = useState(false);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, [itemDetails]);

	const toggleForm = () => {
		setForm(!form);
	}

	return (
		<main>
			<div className='header'>
				<img src={logo} className="logo" />
				<br />
			{!form && !itemDetails ? 
				<button className='button add-button' onClick={toggleForm}>Add Item</button> 
			: null}
			</div>

			{form && <Form form={form} setForm={setForm} />}

			{!itemDetails ?
				<ItemsList items={items} setItemDetails={setItemDetails} form={form} setForm={setForm} /> :
				<ItemDetails item={itemDetails} setItemDetails={setItemDetails} />
			}
		</main>
	)
}
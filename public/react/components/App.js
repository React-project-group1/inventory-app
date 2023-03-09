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

	return (
		<main>
			<div className='header'>
				<img src={logo} className="logo" />
			</div>
			{!itemDetails && <Form />}
			{!itemDetails ?
				<ItemsList items={items} setItemDetails={setItemDetails} /> :
				<ItemDetails item={itemDetails} setItemDetails={setItemDetails} />
			}
		</main>
	)
}
import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemDetails } from './ItemDetails';

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
			console.log(itemsData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			{!itemDetails ?
				<ItemsList items={items} setItemDetails={setItemDetails} /> :
				<ItemDetails item={itemDetails} setItemDetails={setItemDetails} />
			}
		</main>
	)
}
import React from 'react';
import { ItemDetails } from './ItemDetails';
import apiURL from '../api';

export const Item = (props) => {

  async function fetchDetails(){
		try {
			const response = await fetch(`${apiURL}/items/${props.item.id}`);
			const itemData = await response.json();
			
			props.setForm(false);
      		props.setItemDetails(itemData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  return <>
  	<div className='item-wrapper'>
    	<h3>{props.item.title}</h3>
		<br />
  		<div className='item-card'>
    		<img className='item-image' 
				onClick={fetchDetails}
				src={props.item.image} 
				alt={props.item.title} />
  		</div>
  	</div>
    {props.itemDetails && <ItemDetails /> }
  </>
} 
	
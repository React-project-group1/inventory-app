import React from 'react';
import { ItemDetails } from './ItemDetails';
import apiURL from '../api';

export const Item = (props) => {

  async function fetchDetails(){
		try {
			const response = await fetch(`${apiURL}/items/${props.item.id}`);
			const itemData = await response.json();
			
			console.log(itemData)
      props.setItemDetails(itemData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  return <>
    <h3>{props.item.title}</h3>
    <img onClick={fetchDetails} src={props.item.image} alt={props.item.title} />
    {props.itemDetails && <ItemDetails /> }
  </>
} 
	
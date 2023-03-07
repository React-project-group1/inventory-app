import React from 'react';
import { Item } from './item';

export const ItemsList = ({items, setItemDetails}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} setItemDetails={setItemDetails} />
			})
		}
	</>
} 

import React from 'react';
import { Item } from './item';

export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
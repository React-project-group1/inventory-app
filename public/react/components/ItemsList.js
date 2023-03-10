import React from 'react';
import { Item } from './item';

export const ItemsList = ({items, setItemDetails, form, setForm }) => {
	return <div className='item-list'>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} setItemDetails={setItemDetails} form={form} setForm={setForm} />
			})
		}
	</div>
} 

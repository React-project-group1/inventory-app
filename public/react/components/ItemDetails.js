import React from "react";

export const ItemDetails = (props) => {

    const getAllItems = () => {
        props.setItemDetails();
    }

    return <>
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.price}</p>
            <p>{props.item.category}</p>
            <p>{props.item.description}</p>
            <img src={props.item.image} alt={props.item.title} />
       </div>
       <button onClick={getAllItems}>View all Items</button>
    </>
}
import React from "react";

export const ItemDetails = (props) => {
    return <>
        <h3>{props.item.title}</h3>
        <p>{props.item.price}</p>
        <p>{props.item.category}</p>
        <p>{props.item.description}</p>
        <img src={props.item.image} alt={props.item.title} />
    </>
}
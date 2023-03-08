import React from "react";
import apiURL from "../api";

export const ItemDetails = (props) => {

    const getAllItems = () => {
        props.setItemDetails();
    }

    async function onDelete() {
        try {
            const res = await fetch(`${apiURL}/items/${props.item.id}`, {
                method: "DELETE"
            });
            await res.json();
            if(res.ok) {
                props.setItemDetails();
            } else {
                throw new Error('Something went wrong!')
            }
        } catch (err) {
            console.log(err)
        }
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
       <button onClick={onDelete}>DELETE</button>
    </>
}
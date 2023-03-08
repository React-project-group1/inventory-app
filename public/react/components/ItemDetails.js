import React, { useState } from "react";
import apiURL from "../api";
import { UpdateForm } from "./UpdateForm";

export const ItemDetails = ({item, setItemDetails}) => {
    const [updateForm, setUpdateForm] = useState(false);

    const showForm = () => {
        setUpdateForm(!updateForm);
    }

    const getAllItems = () => {
        setItemDetails();
    }

    async function onDelete() {

        try {
            const res = await fetch(`${apiURL}/items/${item.id}`, {
                method: "DELETE"
            });
            await res.json();
            if(res.ok) {
                setItemDetails();
            } else {
                throw new Error('Something went wrong!')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <>
        <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
       </div>
       <button onClick={getAllItems}>View all Items</button>
       <button onClick={showForm}>Update Item</button>
       <button onClick={onDelete}>Delete Item</button>
       {updateForm && <UpdateForm item={item} setItemDetails={setItemDetails} />}
    </>
}
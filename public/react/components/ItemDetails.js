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
       <button className="button view-all" onClick={getAllItems}>View all Items</button>
        <div className="details">
            <img className="details-image" src={item.image} alt={item.title} />
            <div className="details-item">
                <h3>{item.title}</h3>
                <br />
                <p><b>Price:</b> £{item.price}</p>
                <p><b>Category:</b> {item.category}</p>
                <p><b>Description:</b> {item.description}</p>
                <div className="buttons-wrapper">
                    <button className="button"  onClick={showForm}>Update Item</button>
                    <button className="button"  onClick={onDelete}>Delete Item</button>
                </div>
            </div>
           {updateForm && <UpdateForm item={item} setItemDetails={setItemDetails} />}
        </div>
    </>
}
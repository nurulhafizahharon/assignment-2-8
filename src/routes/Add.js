import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Add({ handlerAdd }) {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    quantity: 1,
    price: 0,
    discount: 0,
  });

  const handlerUpdateItem = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const updateItem = { ...newItem, [name]: value };
    setNewItem(updateItem);
  };

  const handlerSubmitForm = (event) => {
    event.preventDefault();
    handlerAdd(newItem);
    navigate("/view");
  };

  return (
    <>
      <h2>Add</h2>
      <label>Product Name</label>
      <input
        name="name"
        value={newItem.name}
        type="text"
        onChange={(e) => handlerUpdateItem(e)}
      />

      <label>Qty</label>
      <input
        name="quantity"
        value={newItem.quantity}
        type="number"
        min={1}
        onChange={(e) => handlerUpdateItem(e)}
      />
      <label>Price $</label>
      <input
        name="price"
        value={newItem.price}
        type="number"
        min={0}
        step={0.01}
        onChange={(e) => handlerUpdateItem(e)}
      />
      <label>Discount %</label>
      <input
        name="discount"
        value={newItem.discount}
        type="number"
        min={0}
        onChange={(e) => handlerUpdateItem(e)}
      />
      <button onClick={handlerSubmitForm}>Add</button>
    </>
  );
}
export default Add;

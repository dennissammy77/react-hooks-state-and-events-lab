import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectedCategory]=useState("")
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>setselectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item)=>item.category.toLowerCase().includes(selectedCategory.toLowerCase())).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

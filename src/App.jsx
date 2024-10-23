import React, { Component, useState } from "react";
import TodoInput from "./components/todo_input";
import TodoList from "./components/todo_list";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    const newItem = {
      id: uuidv4().slice(0, 4),
      title: item,
    };
    console.log(newItem);

    const updateItems = [...items, newItem];
    setItems(updateItems);
    setItem("");
    setEditItem(false);
  };
  const clearList = () => {
    setItems([]);
  };
  const deleteItem = (id) => {
    const filterdeItems = items.filter((item) => item.id !== id);
    setItems(filterdeItems);
  };
  const handleEdit = (id) => {
    const filterdeItems = items.filter((item) => item.id !== id);

    const selectedItem = items.find((item) => item.id === id);

    setItems(filterdeItems);
    setItem(selectedItem.title);
    setEditItem(true);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <TodoInput
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editItem={editItem}
      />
      <TodoList
        items={items}
        clearList={clearList}
        deleteItem={deleteItem}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;

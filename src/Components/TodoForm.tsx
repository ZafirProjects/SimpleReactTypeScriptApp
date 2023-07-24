import { FormEvent, useState } from "react";

interface IaddTodo {
  onSubmit: (title: string) => void;
}

export default function TodoForm({ onSubmit }:IaddTodo) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (newItem === "") {
      return;
    }

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

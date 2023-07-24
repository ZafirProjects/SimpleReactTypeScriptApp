import { Itodos } from "../App";

interface ItodoFunctions{
    todos: Itodos[]
    onDelete: Function
    onToggleCheckbox: Function
}

export default function TodoList({ todos, onDelete, onToggleCheckbox }: ItodoFunctions) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onToggleCheckbox(todo.id, e.target.checked)}
              ></input>
              {todo.title}
            </label>
            <button
              onClick={() => onDelete(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

import { Itodos } from "../App";
import TodoItem from "./TodoItem";

interface ItodoFunctions {
  todos: Itodos[];
  onDelete: (id: string) => void;
  onToggleCheckbox: (id: string, completed: boolean) => void;
}

export default function TodoList({
  todos,
  onDelete,
  onToggleCheckbox,
}: ItodoFunctions) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            onDelete={onDelete}
            onToggleCheckbox={onToggleCheckbox}
          />
        );
      })}
    </ul>
  );
}

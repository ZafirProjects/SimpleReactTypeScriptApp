import { useEffect, useState } from "react";
import {} from "./styles.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

export interface Itodos {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Itodos[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleCheckbox={toggleTodo}
      />
    </>
  );
}

import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { Todo, ToggleTodo, AddTodo } from "./types.d";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "first", complete: false },
  { text: "second", complete: true },
];

export const TodoComponenet: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggoleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const newTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggoleTodo} />
      <AddTodoForm addTodo={newTodo} />
    </React.Fragment>
  );
};

import React, { useState } from "react";
import { useTodo } from "../../../../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} action="#" className="flex gap-4 justify-between">
      <input
        type="text"
        placeholder="Enter Goal.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="bg-gray-200 px-3 py-1 rounded-xl w-[130%] drop-shadow-md"
      />
      <button
        type="submit"
        className="bg-green-300 px-6 py-1 rounded-xl drop-shadow-md hover:scale-105 font-bold text-3xl text-center"
      >
        +
      </button>
    </form>
  );
}

export default TodoForm;

import React, { useState } from "react";
import { useTodo } from "../../../../contexts/TodoContext";

function Todo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`border border-gray-300 py-2 px-4 rounded flex justify-between items-center ${
        todo.completed ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="bg-green-200"
        />
        <input
          type="text"
          className={`inline mx-3 w-full  ${
            isTodoEditable ? "border-black/10 border-2 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* <p className="inline mx-3">Todo text</p> */}
      </div>
      <div className="flex gap-2">
        <button
          className={`text-center p-1 bg-gray-100 rounded-md hover:scale-105 hover:bg-blue-500
          }`}
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="text-center p-1 bg-gray-100 rounded-md hover:scale-105 hover:bg-red-500"
          onClick={() => deleteTodo(todo.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Todo;

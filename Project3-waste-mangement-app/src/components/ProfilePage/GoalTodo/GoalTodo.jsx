import React, { useState, useEffect } from "react";
import Todo from "./Todo/Todo";
import { TodoProvider } from "../../../contexts/TodoContext";
import TodoForm from "./TodoForm/TodoForm";

function GoalTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <section className="bg-white w-[85vw] flex flex-col justify-center items-center border self-center p-5  gap-4 rounded-xl drop-shadow-md cursor-default">
        <h5 className="lg:text-2xl">Recycling and Waste Reduction Goals</h5>
        <div className="flex flex-col gap-2 w-full">
          <TodoForm />
        </div>
        <div className="flex flex-col gap-2 w-full">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
        <div className="bg-green-300 py-2 text-center font-medium rounded-xl self-center w-[100%]">
          Goals Remaing: 3
        </div>
      </section>
    </TodoProvider>
  );
}

export default GoalTodo;

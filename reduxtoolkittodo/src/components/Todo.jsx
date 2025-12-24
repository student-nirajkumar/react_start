import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-8 space-y-3">
      {todos.length === 0 && (
        <p className="text-gray-400 text-center">
          No todos added yet
        </p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded px-4 py-3"
        >
          <p className="text-gray-100 text-base">
            {todo.text}
          </p>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded focus:outline-none"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

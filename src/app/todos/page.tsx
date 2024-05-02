import { useState } from "react";
import TodoList from "./todo";

export default function TodoHome() {
  return (
    <div className="flex flex-row">
      <div className="w-full">
        <h2>Here is the list of all todos</h2>

        <TodoList />
      </div>
    </div>
  );
}

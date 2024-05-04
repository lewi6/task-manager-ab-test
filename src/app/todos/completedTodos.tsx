"use client";

import { useTaskStore } from "@/components/Store/useTaskStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function TodoList() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [showCompleted, setShowCompleted] = useState(false);

  console.log(data, isLoading, isFetching);
  const { completedTodos, setCompletedTodos } = useTaskStore();

  //   useEffect(() => {
  //     if (isFetching || isLoading) return;
  //     setTasks(data?.todos);
  //   }, [data?.todos, isFetching, isLoading, setTasks]);

  if (isFetching) return <>loading...</>;
  return (
    <div className="flex flex-col w-[650px] mx-auto gap-2">
      <h1 className="cursor-pinter p-2 border-red-800"> ALL</h1>

      <div className="flex flex-row w-full justify-between">
        <button
          className="flex bg-blue"
          onClick={() => setShowCompleted(false)}
        >
          ALL
        </button>

        <button
          className=" flex bg-green"
          onClick={() => setShowCompleted(true)}
        >
          Completed
        </button>
      </div>
      {data?.todos
        .filter(completedTodos.includes(data?.todos.id))
        ?.map((obj: any, i: number) => (
          <div className="flex flex-row justify-between" key={i}>
            <div>{obj.id}</div>
            <div>{obj.todo}</div>
            <div>{obj.completed ? "true" : "false"}</div>
            <div>{obj.userId}</div>

            <input
              type="checkbox"
              checked={completedTodos.includes(obj.id)}
              onChange={(e) => setCompletedTodos([...completedTodos, obj.id])}
            />
          </div>
        ))}
    </div>
  );
}

const getTodos = async () => {
  const res = await fetch(`https://dummyjson.com/todos`);

  return res.json();
};

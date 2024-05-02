"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import _ from "lodash";
import { useTodoStore } from "@/components/Store/useTodoStore";
export default function TodoList() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [showCompleted, setShowCompleted] = useState(false);

  console.log(data, isLoading, isFetching);
  const { completedTodos, setCompletedTodos } = useTodoStore();

  //   useEffect(() => {
  //     if (isFetching || isLoading) return;
  //     setTodos(data?.todos);
  //   }, [data?.todos, isFetching, isLoading, setTodos]);

  if (isFetching) return <>loading...</>;
  return (
    <div className="flex flex-col w-[650px] mx-auto gap-2">
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
          Completed 🧑
        </button>
      </div>
      {showCompleted &&
        data?.todos
          .filter((obj: any) => completedTodos.includes(obj.id))
          ?.map((obj: any, i: number) => (
            <div className="flex flex-row justify-between" key={i}>
              <div>{obj.id}</div>
              <div>{obj.todo}</div>
              <div>{obj.completed ? "true" : "false"}</div>
              <div>{obj.userId}</div>

              <input
                type="checkbox"
                checked={completedTodos.includes(obj.id)}
                onClick={(e) =>
                  completedTodos.includes(obj.id)
                    ? setCompletedTodos([
                        ...completedTodos.filter((id) => obj.id !== id),
                      ])
                    : setCompletedTodos([...completedTodos, obj.id])
                }
              />
            </div>
          ))}
      {!showCompleted &&
        data?.todos?.map((obj: any, i: number) => (
          <div className="flex flex-row justify-between" key={i}>
            <div>{obj.id}</div>
            <div>{obj.todo}</div>
            <div>{obj.completed ? "true" : "false"}</div>
            <div>{obj.userId}</div>

            <input
              type="checkbox"
              checked={completedTodos.includes(obj.id)}
              onClick={(e) =>
                completedTodos.includes(obj.id)
                  ? setCompletedTodos([
                      ...completedTodos.filter((id) => obj.id !== id),
                    ])
                  : setCompletedTodos([...completedTodos, obj.id])
              }
            />
          </div>
        ))}
    </div>
  );
}

const getTodos = async () => {
  const res = await fetch(`https://dummyjson.com/todos?limit=10`);

  return res.json();
};

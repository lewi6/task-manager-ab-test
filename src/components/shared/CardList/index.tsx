"use client";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useTodoStore } from "@/components/Store/useTodoStore";
// import Card from "../Card/CardDummy";

const CardList = () => {
  const { data, isLoading, isFetching } = useQuery<{
    todos: { id: number; todo: string; completed: boolean; userId: number }[];
  }>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [showCompleted, setShowCompleted] = useState(false);

  const { completedTodos, todos, setCompletedTodos, setTodos } = useTodoStore();

  useEffect(() => {
    if (isFetching || isLoading) return;
    setTodos(data?.todos as Record<string, any>[]);
  }, [data?.todos, isFetching, isLoading, setTodos]);

  return (
    <>
      {todos.map((obj, idx) => (
        <Card key={idx} index={idx} id={obj.id} title={obj.todo} />
      ))}

      {/* {[...new Array(30)]?.map((_, idx) => <Card key={idx} index={idx} />)} */}
    </>
  );
};

export default CardList;

const getTodos = async () => {
  const res = await fetch(`https://dummyjson.com/todos`);

  return res.json();
};

import { create } from "zustand";

interface TodoStore {
  todos: Record<string, any>[];
  setTodos: (todo: Record<string, any>[]) => void;
  completedTodos: number[];
  setCompletedTodos: (todo: number[]) => void;
  show: "all" | "completed" | "in-progress" | "todo";
  setShow: (show: "all" | "completed" | "in-progress" | "todo") => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todo) => set({ todos: todo }),
  completedTodos: [],
  setCompletedTodos: (todos) => set({ completedTodos: todos }),
  show: "all",
  setShow: (showing) => set({ show: showing }),
}));

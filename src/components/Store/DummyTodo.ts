import { create } from "zustand";

interface TodoStore {
  todos: Record<string, any>[];
  setTodos: (todo: Record<string, any>[]) => void;
  completedTodos: number[];
  setCompletedTodos: (todo: number[]) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todo) => set({ todos: todo }),
  completedTodos: [],
  setCompletedTodos: (todos) => set({ completedTodos: todos }),
}));

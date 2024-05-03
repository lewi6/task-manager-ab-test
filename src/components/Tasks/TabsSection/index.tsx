"use client";

import { Button } from "@/components/ui/button";
import { Plus, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTaskStore } from "@/components/Store/useTaskStore";

export default function TabsSection() {
  const { t } = useTranslation();
  const { show, tasks, setShow } = useTaskStore();
  return (
    <div className="flex h-full flex-wrap items-center justify-between gap-2 rounded-2xl bg-white px-4 py-4 shadow-sm dark:bg-gray-800 lg:h-20 lg:py-0">
      <div className="flex h-full flex-wrap items-center">
        {["all", "completed", "in-progress", "todo"].map((status, idx) => (
          <Button
            key={idx}
            onClick={() =>
              setShow(
                `${status as "all" | "completed" | "in-progress" | "todo"}`
              )
            }
            className={`group relative flex h-full max-h-none w-max items-center gap-2 rounded-b-lg border-primary bg-transparent px-4 hover:scale-100 hover:text-primary ${status === show ? `text-primary` : ``}`}
          >
            {show === status && (
              <motion.span
                layoutId="active"
                className="absolute inset-x-0 bottom-0 left-0 hidden h-1 w-full rounded-t-lg bg-primary lg:inline-block"
              />
            )}
            {t(`task:${status}`)}{" "}
            <span
              className={`inline-block rounded-sm  px-2 py-1 text-xs  transition-all group-hover:bg-highlight-blue group-hover:text-primary  dark:group-hover:bg-gray-700 ${status === show ? `dark:bg-gray-700 text-primary group-hover:text-primary bg-highlight-blue` : `bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-200`}`}
            >
              {
                tasks.filter((task) =>
                  status === "all" ? tasks.length : task.status === status
                ).length
              }
            </span>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          className="flex items-center gap-2 rounded-lg bg-transparent dark:border-gray-700 dark:text-gray-200"
          variant="outline"
        >
          <SlidersHorizontal className="size-4" />
          Filter & Sort
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-lg bg-transparent dark:border-gray-700 dark:text-gray-200"
        >
          <Plus className="size-4" /> New Task
        </Button>
      </div>
    </div>
  );
}

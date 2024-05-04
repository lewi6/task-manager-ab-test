"use client";

import React from "react";

import useWindowSize from "@/hooks/useWindowSize";

import { Bell, Home, Moon, Plus, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Logo from "../../../assets/todo.png";
import NavLink from "../Navbar/Menu/NavLink";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="fixed inset-0 left-0 top-0 z-30 hidden h-screen w-24 flex-col items-center justify-between border-r border-gray-100 bg-white pb-8 pt-4 dark:border-gray-700 dark:bg-gray-900 lg:flex">
      <div className="flex w-full flex-col items-center gap-12 border-b border-inherit pb-8">
        <div className="relative size-12">
          <Image
            className="rounded-full object-cover"
            alt="Logo"
            src={Logo}
            placeholder="blur"
            fill
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          {[...new Array(5)].map((_, idx) => (
            <NavLink
              href="/home"
              classNames="w-full flex items-center justify-center py-2"
              key={idx}
            >
              <Home className="size-6" strokeWidth={1} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {[...new Array(3)].map((_, idx) => (
          <Avatar className="size-8 object-cover" key={idx}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
        <Button
          size="icon"
          className="flex min-h-8 min-w-10 items-center justify-center rounded-full border border-dashed border-gray-300 bg-transparent dark:border-gray-700"
        >
          <Plus className="size-4" strokeWidth={1} />
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        {[...new Array(2)].map((_, idx) => (
          <Link href="/profile" key={idx}>
            <Settings className="size-6" strokeWidth={1} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

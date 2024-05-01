"use client";

import ShoppingCart from "@/components/Form/Cart";
import UserForm from "@/components/Form/UserForm";
import UserList from "@/components/Form/UserList";
import { Item } from "@/components/Form/types";
import { useState } from "react";



export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  const items: Item[] = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className="home">
  <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
      <ShoppingCart items={items} />
    </div>
  );
}

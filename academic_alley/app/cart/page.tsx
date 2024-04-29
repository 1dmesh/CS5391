"use client";

import React from "react";
import { title } from "@/components/primitives";
import CartCard from "./cart-card";

export default function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div>
      <h1 className={title()}>Cart</h1>
      {Object.keys(cart).map((key, index) => {
        return (
          <CartCard {...cart[key]} />
        );
      })}
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import CartCard from "./cart-card";
import { iCartItem } from "../dataset";
import { Divider } from "@nextui-org/react";
import { isTemplateExpression } from "typescript";

export default function CartPage() {
  const [cartData, setCartData] = useState<iCartItem[]>([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartData(cart);
  }, []);

  function getSubtotal() {
    let subtotal: number = 0;

    for (const [id, item] of Object.entries(cartData)) {
      console.log(item)
      subtotal += item.price * item.qty;
    }

    return (
      <>{subtotal}</>
    )
  }

  return (
    <>
      <h1 className={title()}>Cart</h1>
      {(cartData ? Object.keys(cartData).length : 0) > 0 ? (
        Object.keys(cartData).map((key, index) => {
          return (
            <CartCard
              key={key}
              id={key}
              item={cartData[key]}
              setCartData={setCartData}
            />
          );
        })
      ) : (
        <p className="m-8 p-2">Cart is empty.</p>
      )}
      <Divider></Divider>
      <div className="m-4 text-right">Subtotal: ${getSubtotal()}</div>
    </>
  );
}

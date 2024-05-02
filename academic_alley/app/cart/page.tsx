"use client";

import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { title } from "@/components/primitives";
import CartCard from "./cart-card";
import { iCartItem } from "../dataset";
import { Divider, Button, Spacer } from "@nextui-org/react";
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
      console.log(item);
      subtotal += item.price * item.qty;
    }

    return <>{subtotal}</>;
  }

  return (
    <>
      <h1 className={title()}>Cart</h1>
      <Spacer y={10}/>
      <Divider/>
      <Spacer y={5}/>
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
      {(cartData ? Object.keys(cartData).length : 0) > 0 ? (
        <>
          <Spacer y={10}/>
          <Divider/>
          <div className="m-4 text-right">Subtotal: ${getSubtotal()}</div>
          <div className="flex justify-end m-4">
            <Button as={NextLink} color="primary" href="/checkout">
              Proceed to Checkout
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

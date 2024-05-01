"use client";

import React, { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import CartCard from "./cart-card";
import { iCartItem } from "../dataset";

export default function CartPage() {
  const [cartData, setCartData] = useState<iCartItem[]>([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartData(cart);
  }, []);

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
      {/* TODO: show total price */}
    </>
  );
}

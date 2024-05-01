"use client";

import { iCartItem } from "@/app/dataset";
import { Button } from "@nextui-org/button";
import { title } from "process";

export default function AddToCartButton({
  id,
  name,
  price,
}: {
  id: number;
  name: string;
  price: number;
}) {
  function addToCart() {
    let cart = {};
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    if (!(id in cart)) {
      let cartItem: iCartItem = {
        name: name,
        price: price,
      };
      cart[id] = cartItem
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }

  return <Button onPress={addToCart}>add to cart</Button>;
}

"use client";

import { Button } from "@nextui-org/button";

export default function AddToCartButton({ name, price } : { name: string; price: number }) {
  function addToCart() {
    console.log(name);
  }
  return <Button onPress={addToCart}>add to cart</Button>;
}

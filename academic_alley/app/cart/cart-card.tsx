import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { iCartItem } from "../dataset";
import { Button, Dropdown, Input } from "@nextui-org/react";
import React from "react";

export default function CartCard({
  id,
  item,
  setCartData,
}: {
  id: string;
  item: iCartItem;
  setCartData: CallableFunction;
}) {
  function remove() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (id in cart) {
      delete cart[id];
    }
    setCartData(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function handleQtyChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      return;
    }
    let inputValue = Number(event.target.value);
    if (inputValue < 1) {
      remove();
      return;
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart[id].qty = inputValue;
      setCartData(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  return (
    <Card className="min-w-[350px] max-w-[600px] m-8 p-2" key={item.id}>
      <CardHeader className="flex-row justify-between">
        <div className="font-bold text-left">{item.name}</div>
        <div className="flex gap-5">${item.price}</div>
      </CardHeader>
      <CardBody className="flex-row justify-between">
        <Button size="sm" color="danger" variant="bordered" onPress={remove}>
          Remove
        </Button>
        <div className="flex gap-5">
          <Input
            className="w-[100px]"
            type="number"
            size="sm"
            defaultValue={String(item.qty)}
            onChange={handleQtyChange}
            startContent={<div className="text-default-500">qty: </div>}
          ></Input>
        </div>
      </CardBody>
    </Card>
  );
}

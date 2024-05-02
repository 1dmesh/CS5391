"use client";

import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { title } from "@/components/primitives";
import { iCartItem } from "../dataset";
import { Divider, Button, Input, Spacer } from "@nextui-org/react";
import { isTemplateExpression } from "typescript";
import { Router } from "next/router";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function CartPage() {
  const router = useRouter();
  const cart = JSON.parse(localStorage.getItem("cart"));

  function getSubtotal() {
    let subtotal: number = 0;

    for (const [id, item] of Object.entries(cart)) {
      console.log(item);
      subtotal += item.price * item.qty;
    }

    return <>{subtotal}</>;
  }

  function clearCart() {
    localStorage.setItem("cart", JSON.stringify({}));
    router.push("/");
  }

  return (
    <>
      <h1 className={title()}>Checkout</h1>
      <div className="grid grid-cols-2">
        <div>
          <div className="grid grid-cols-2 gap-4 m-8">
            <Input className="col-span-2" label="Cardholder name" />
            <Input className="col-span-2" label="Card number" />
            <Input label="Expiration" />
            <Input label="CVV" type="password" />
            <Button className="col-span-2" color="primary" onPress={clearCart}>
              Checkout
            </Button>
          </div>
        </div>
        <div>
          {Object.keys(cart).map((key, index) => {
            return (
              <Card className="min-w-[350px] max-w-[600px] m-8 p-2" key={key}>
                <CardHeader className="flex-row justify-between">
                  <div className="font-bold text-left">{cart[key].name}</div>
                  <div>
                    <div className="flex gap-5 text-right">${cart[key].price}</div>
                    <div className="text-right">qty: {cart[key].qty}</div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
          <div>
            <Divider></Divider>
            <div className="text-right m-4">Subtotal: ${getSubtotal()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

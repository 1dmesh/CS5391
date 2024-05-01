import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { iCartItem } from "../dataset";
import { Button } from "@nextui-org/react";

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

  return (
    <Card className="max-w-[600px] m-8 p-2" key={item.id}>
      <CardHeader>
        <p className="font-bold text-left">{item.name}</p>
      </CardHeader>
      <CardBody className="flex-row justify-between">
        <Button size="sm" color="danger" variant="bordered" onPress={remove}>
          Remove
        </Button>
        <div className="flex gap-5">${item.price}</div>
      </CardBody>
    </Card>
  );
}

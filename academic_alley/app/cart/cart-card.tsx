import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { iCartItem } from "../dataset";

export default function CartCard(item: iCartItem) {
  return (
    <Card className="max-w-[600px] m-8 p-2" key={item.id}>
      <CardHeader>
        <p className="font-bold text-left">{item.name}</p>
      </CardHeader>
      <CardBody>
        <p>qty: {item.qty}</p>
        <p className="text-right">${item.price}</p>
      </CardBody>
      {/* TODO: remove button */}
    </Card>
  );
}

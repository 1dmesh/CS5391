import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import AddToCartButton from "@/components/add-to-cart-button";
import { iTextbook } from "../dataset";

export default function TextbookCard(book: iTextbook) {
  return (
    <Card className="max-w-[600px] m-8 p-2" key={book.ISBN}>
      <CardHeader>
        <p className="font-bold text-left">{book.title}</p>
      </CardHeader>
      <CardBody>
        <p>{book.author}</p>
        <p>
          <b>ISBN:</b> {book.ISBN}
        </p>
        <p className="text-right">${book.price}</p>
      </CardBody>
      <AddToCartButton name={book.title} price={book.price}></AddToCartButton>
    </Card>
  );
}

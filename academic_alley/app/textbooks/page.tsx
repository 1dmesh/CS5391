import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import AddToCartButton from "@/components/add-to-cart-button";
import { promises as fs } from "fs";

export default async function TextbooksPage() {
  const file = await fs.readFile(process.cwd() + "/app/dataset.json", "utf8");
  const textbooks = JSON.parse(file).textbooks;

  return (
    <div>
      <h1 className={title()}>Textbooks</h1>
      {textbooks.map((book) => (
        <Card className="max-w-[600px] m-8 p-2" key={book.id}>
          <CardHeader className="justify-start">
            <p>{book.title}</p>
          </CardHeader>
          <CardBody>
            <p>{book.author} </p>
            <p>${book.price}</p>
          </CardBody>
          <AddToCartButton name={book.title} price={book.price}></AddToCartButton>
        </Card>
      ))}
    </div>
  );
}

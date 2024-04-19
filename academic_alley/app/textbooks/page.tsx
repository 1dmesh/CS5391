import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { promises as fs } from "fs";

export default async function TextbooksPage() {
  const file = await fs.readFile(process.cwd() + "/app/dataset.json", "utf8");
  const textbooks = JSON.parse(file).textbooks;

  return (
    <div>
      <h1 className={title()}>Textbooks</h1>
      {textbooks.map((book) => (
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <p>{book.title}</p>
            <p>{book.author} </p>
          </CardHeader>
          <CardBody>
            <p>${book.price}</p>
          </CardBody>
          <Button>
            add to cart
          </Button>
        </Card>
      ))}
    </div>
  );
}

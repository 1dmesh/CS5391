"use client";
import { title } from "@/components/primitives";
import TextbookCard from "./textbook";
import TextbookSearch from "./textbook-search";
import { useEffect, useState } from "react";
import { iTextbook, textbooks } from "../dataset";
import { useSearchParams } from "next/navigation";
import { Divider, Spacer } from "@nextui-org/react";

export default function TextbooksPage() {
  const allTextbooks = textbooks;

  const [cardData, setCardData] = useState<iTextbook[]>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("q");

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
      const findTextbook = allTextbooks.filter((book) => {
        if (searchQuery) {
          return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.ISBN.toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        } else {
          // If no search query, return the original data
          return true;
        }
      });

      setCardData(findTextbook);
    };
    handleSearch();
  }, [searchQuery]);

  return (
    <div>
      <h1 className={title()}>Textbooks</h1>
      <Spacer y={5}/>
			<h4>
        Search for textbooks, and purchase them if you want to.
			</h4>
      <Spacer y={10}/>
      <Divider/>
      <Spacer y={2}/>
			<div className="flex w-full flex-wrap md:flex-nowrap gap-2">
        <TextbookSearch defaultValue={searchQuery}/>
			</div>
      <Spacer y={2}/>
      <Divider/>
      <Spacer y={5}/>
      <div className="grid grid-cols-2">
        {cardData.map((book: iTextbook) => (
          <TextbookCard {...book} />
        ))}
      </div>
    </div>
  );
}

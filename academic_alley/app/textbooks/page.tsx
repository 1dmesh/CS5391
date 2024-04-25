"use client";
import { title } from "@/components/primitives";
import TextbookCard from "./textbook";
import TextbookSearch from "./textbook-search";
import { useEffect, useState } from "react";
import { iTextbook, textbooks } from "../dataset";

export default function TextbooksPage() {
  const allTextbooks = textbooks;

  const [cardData, setCardData] = useState<iTextbook[]>([]);

  useEffect(() => {
    // show all by default
    setCardData(textbooks);
  }, []);

  const totalTextbooks = cardData.length;

  return (
    <div>
      <h1 className={title()}>Textbooks</h1>
      {/* <TextbookSearch defaultValue={searchQuery} /> */}
      {cardData.map((book: iTextbook) => (
        <TextbookCard {...book} />
      ))}
    </div>
  );
}

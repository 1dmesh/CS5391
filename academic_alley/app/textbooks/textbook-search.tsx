"use client";

import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { useState, ChangeEvent } from "react";

interface iDefault {
  defaultValue: string | null;
}

export default function TextbookSearch({ defaultValue }: iDefault) {
  const router = useRouter();
  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    // TODO: pass in or query the base URL to make this entire component usable by all searches
    if (inputValue) return router.push(`/textbooks/?q=${inputValue}`);
    if (!inputValue) return router.push("/textbooks/");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <Input
      className="m-8 flex justify-center"
      placeholder="Search..."
      value={inputValue ?? ""}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
}

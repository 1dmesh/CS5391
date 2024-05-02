"use client";
import React from "react";
import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spacer,
  User,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { iPerson, people } from "../dataset";

import { BorderedInput } from "@components/inputs";

interface iDefault {
  defaultvalue: string | null;
}

function PersonSearch({ defaultValue }: iDefault) {
  const router = useRouter();
  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    // TODO: pass in or query the base URL to make this entire component usable by all searches
    if (inputValue) return router.push(`/people/?q=${inputValue}`);
    if (!inputValue) return router.push("/people/");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <Input
      // className="m-8 flex justify-center"
      placeholder="Search..."
      value={inputValue ?? ""}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
}

function PersonCard(person: iPerson) {
  return (
    <Card className="m-8 p-2">
      <CardHeader>
        <User
          name={person.name}
          description={person.type + ", " + person.department}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </CardHeader>
      <CardBody>
        <p>{person.email}</p>
        <p>(555)555-5555</p>
      </CardBody>
    </Card>
  );
}

export default function PeoplePage() {
  const [search, setSearch] = useState<iPerson[]>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("q");

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
      const findPeople = people.filter((person) => {
        if (searchQuery) {
          return (
            person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            // person.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.type.toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else {
          // If no search query, return the original data
          return true;
        }
      });

      setSearch(findPeople);
    };
    handleSearch();
  }, [searchQuery]);

  return (
    <>
      <h4>
        TODO: So much! But it probably looks like this? A filter is def needed
      </h4>
      <Spacer y={10} />
      <PersonSearch defaultvalue={searchQuery} />
      <Spacer y={10} />
      <Divider />
      <Spacer y={10} />
      {search.map((person: iPerson) => (
        <PersonCard {...person} />
      ))}

      {/* <Spacer y={10} />
      <Divider />
      <Spacer y={10} /> */}
      {/* <Pagination total={10} initialPage={1} /> */}
    </>
  );
}

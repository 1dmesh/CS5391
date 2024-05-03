"use client";
import React from "react";
import { title } from "@/components/primitives";
import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Spacer,
  User,
  Button,
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
    if (inputValue) return router.push(`/roommates/?q=${inputValue}`);
    if (!inputValue) return router.push("/roommates/");
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

function RoommateCard(person: iPerson) {
  return (
    <Card className="m-8 p-2" key={person.id}>
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
        <p>(555) 555-5555</p>
        <p>Move in: {person.roommateInfo?.moveInDate.toDateString()}</p>
        <p>Gender: {person.roommateInfo?.gender}</p>
        <p>Rent: ${person.roommateInfo?.rent}</p>
        <p>{}</p>
      </CardBody>
    </Card>
  );
}

export default function RoommatePage() {
  const potentialRoommates = people.filter((person: iPerson) => {
    return Object.hasOwn(person, "roommateInfo");
  });

  const [search, setSearch] = useState<iPerson[]>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("q");

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
      const findPeople = potentialRoommates.filter((person) => {
        if (searchQuery) {
          return (
            person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.department
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            person.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.roommateInfo?.gender
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            person.roommateInfo?.moveInDate
              .toDateString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
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

  // const [selectedGender, setSelectedGender] = React.useState(new Set());
  // const selectedValue = React.useMemo(
  //   () => Array.from(selectedGender).join(" ").replaceAll("_", " "),
  //   [selectedGender]
  // );
  // function handleSelectGender(keys: React.Key[]) {
  //   setSelectedGender(keys);
  //   handleSearch();
  // }
  // const handleSearch = () => {
  //   console.log(selectedGender)
  //   const filteredPeople = potentialRoommates.filter((person: iPerson) => {
  //     if (selectedGender.size < 1) {
  //       return true;
  //     } else {
  //       return selectedGender.has(person.roommateInfo.gender);
  //     }
  //   });
  //   setSearch(filteredPeople);
  // };

  return (
    <>
      <h1 className={title()}>Roommate Search</h1>
      <Spacer y={10} />
      <Divider />
      <Spacer y={2} />
      <div className="flex flex-row justify-left gap-4">
        {/* <Dropdown>
          <DropdownTrigger>
            <Button>gender: {selectedValue}</Button>
          </DropdownTrigger>
          <DropdownMenu
            closeOnSelect={false}
            selectionMode="multiple"
            selectedKeys={selectedGender}
            onSelectionChange={handleSelectGender}
          >
            <DropdownItem key="male">male</DropdownItem>
            <DropdownItem key="female">female</DropdownItem>
            <DropdownItem key="nonbinary">nonbinary</DropdownItem>
            <DropdownItem key="other">other</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <PersonSearch defaultvalue={searchQuery} />
      </div>
      <Spacer y={2} />
      <Divider />
      <div className="grid grid-cols-3">
        {search.map((person: iPerson) => (
          <RoommateCard {...person} />
        ))}
      </div>
    </>
  );
}

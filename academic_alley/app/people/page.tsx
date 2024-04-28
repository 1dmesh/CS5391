"use client"
import React from "react";
import {
	Divider,
	Pagination,
	Spacer, 
	User
} from "@nextui-org/react";

import { BorderedInput } from "@components/inputs"

export default function PeoplePage() {
	const [search, setSearch] = React.useState("")

  return (
		<>
			<h4>So much! But it probably looks like this? A filter is def needed</h4>
			<Spacer y={10}/>
			<BorderedInput 
				label="Search for people, if you want to."
				setState={setSearch}/>
			<Spacer y={10}/>
			<Divider/>
			<Spacer y={10}/>
			<User   
				name="Jane Doe"
				description="Product Designer"
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
				}}/>
			<User   
				name="Jane Doe"
				description="Product Designer"
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
				}}/>
			<User   
				name="Jane Doe"
				description="Product Designer"
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
				}}/>
			<Spacer y={10}/>
			<Divider/>
			<Spacer y={10}/>
			<Pagination total={10} initialPage={1} />
		</>
  );
}

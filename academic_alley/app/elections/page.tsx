/*
The website runs a poll to test whom users will vote for in a fictitious 
election of the head of the student union. You can store the results 
of the poll in a database and draw a bar chart of the results using 
the image functions. Suppose the three candidates are: 
John, Mary, and Susa
*/
import React from "react";
import { title } from "@/components/primitives";

export default function ElectionPage() {
	return (
		<div>
			<h1 className={title()}>Elections</h1>
		</div>
	);
}

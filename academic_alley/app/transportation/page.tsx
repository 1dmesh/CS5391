/*
Images:
https://www.flaticon.com/free-icon/bus-ticket_3205244?term=bus+ticket&page=1&position=5&origin=search&related_id=3205244
https://www.flaticon.com/free-icon/bus_1036191
*/
"use client"
import React from "react";
import {
	Accordion, 
	AccordionItem,
	Image,
	Spacer,
} from "@nextui-org/react";

export default function TransportPage() {
  return (
		<>
			<h4>TODO: Format, make them clickable for a "checkout". Maybe a modal?</h4>
			<Spacer y={10}/>
			<Accordion 
				variant="bordered"
				defaultExpandedKeys={["1"]}
				style={{ height: '100%', width: '100%' }}>
				<AccordionItem 
					key="1" 
					title="Bus Tickets"
					aria-label="Bus Tickets" 
					subtitle="Press to expand"
					startContent={
						<Image
							alt="Image of a bus ticket"
							className="object-cover rounded-xl"
							src="/assets/transport/bus-ticket.png"
							width={100}/>
					}>
						Bus Tickets!
				</AccordionItem>
				<AccordionItem
					key="2"
					title="Bus Cards"
					aria-label="Bus Cards"
					startContent={
						<Image
							alt="Image of a bus ticket"
							className="object-cover rounded-xl"
							src="/assets/transport/bus.png"
							width={100}/>
					}>
					Bus Cards!
				</AccordionItem>
			</Accordion>
		</>
  );
}
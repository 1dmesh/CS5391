/*
Images:
https://www.flaticon.com/free-icon/bus-ticket_3205244?term=bus+ticket&page=1&position=5&origin=search&related_id=3205244
https://www.flaticon.com/free-icon/bus_1036191
*/
"use client";
import React from "react";
import { Accordion, AccordionItem, Image, Spacer } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import AddToCartButton from "@/components/add-to-cart-button";

interface iTransportItemCard {
  id: string;
  name: string;
  price: number;
}

const busA: iTransportItemCard = {
  id: "busTicketA",
  name: "Bus Ticket - Zone A",
  price: 2,
};

const busB: iTransportItemCard = {
  id: "busTicketB",
  name: "Bus Ticket - Zone B",
  price: 4,
};

const busC: iTransportItemCard = {
  id: "busTicketC",
  name: "Bus Ticket - Zone C",
  price: 6,
};

const tickets = [busA, busB, busC];

const busCard: iTransportItemCard = {
  id: "busCard",
  name: "Bus Card - All Zones",
  price: 40,
};

function TransportItemCard(transportItem: iTransportItemCard) {
  return (
    <Card className="m-4 p-2" key={transportItem.id}>
      <CardHeader className="pb-0 pt-2 px-4 flex-row items-start justify-between">
        <p className="text-small uppercase font-bold">{transportItem.name}</p>
        <p className="text-small">${transportItem.price}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Spacer y={5} />
        {/* <Divider /> */}
        {/* <Spacer y={5} /> */}
        {/* <div className="max-w-full self-center items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={300}
          />
        </div> */}
        {/* <Spacer y={5} /> */}
        <AddToCartButton {...transportItem}></AddToCartButton>
      </CardBody>
    </Card>
  );
}

export default function TransportPage() {
  return (
    <div className="min-w-[50%]">
      <h1 className={title()}>Transportation</h1>
      {/* <Spacer y={10}/> */}
      <Accordion
        variant="bordered"
        // defaultExpandedKeys={["1"]}
        // style={{ height: "100%", width: "100%" }}
      >
        <AccordionItem
          key="1"
          title="Bus Tickets"
          aria-label="Bus Tickets"
          // subtitle="Press to expand"
          startContent={
            <Image
              alt="Image of a bus ticket"
              className="object-cover rounded-xl"
              src="/assets/transport/bus-ticket.png"
              width={100}
            />
          }
        >
          {tickets.map((ticket: iTransportItemCard) => (
            <TransportItemCard {...ticket} />
          ))}
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
              width={100}
            />
          }
        >
          <TransportItemCard {...busCard}></TransportItemCard>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

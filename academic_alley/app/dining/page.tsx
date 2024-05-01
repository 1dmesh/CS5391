/*
Task:
8. Meal plan
A student can purchase a meal plan online by credit card. 
He/she can buy a meal plan by month at $600 or by semester at a 5% discount.

Images:
https://www.flaticon.com/free-icon/cereal_5371118?related_id=5473629&origin=search
https://www.flaticon.com/free-icon/cutlery_3170733
https://www.flaticon.com/free-icon/dish_1065715
*/
"use client"
import React from "react";
import {
	Card, 
	CardHeader, 
	CardBody, 
	Image,
	Spacer,
	Divider
} from "@nextui-org/react";
import { title } from "@/components/primitives";

function MealCard({
	header,
	image,
}) {
	return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				{header}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={500}
        />
      </CardBody>
    </Card>
	);
}

export default function DiningPage() {
  return (
		<>
			<h1 className={title()}>Dining Passes</h1>
			<Spacer y={10}/>
			<h4>Please spend your hard earned money on some potatoes.</h4>
			<Spacer y={10}/>
			<Divider/>
			<Spacer y={10}/>
			<div className="w-full grid gap-2 grid-cols-3 grid-rows-1">
				<MealCard 
					header={
						<>
							<p className="text-tiny uppercase font-bold">Daily Mix</p>
							<small className="text-default-500">12 Tracks</small>
							<h4 className="font-bold text-large">Frontend Radio</h4>
						</>
					}
					image="/assets/dining/cereal.png"/>
				<MealCard 
					header=""
					image="/assets/dining/dish.png"/>
				<MealCard 
					header=""
					image="/assets/dining/cutlery.png"/>
			</div>
			<Spacer y={10}/>
			<Divider/>
		</>
  );
}

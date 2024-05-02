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
"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Spacer,
  Divider,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import AddToCartButton from "@/components/add-to-cart-button";

interface iMealPlan {
  id: string;
  name: string;
  price: number;
}

const singleMonth: iMealPlan = {
  id: "mealplan1month",
  name: "1 Month Plan",
  price: 600.0,
};

const fourMonth: iMealPlan = {
  id: "mealplan4month",
  name: "Semester (4 Month) Plan",
  price: 2280.0,
};

function MealCard({ mealPlan, image }: { mealPlan: iMealPlan; image: string }) {
  return (
    <Card className="py-4" key={mealPlan.id}>
      <CardHeader className="pb-0 pt-2 px-4 flex-row items-start justify-between">
        <p className="text-small uppercase font-bold">{mealPlan.name}</p>
        <p className="text-small">${mealPlan.price}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
				<Spacer y={5}/>
				<Divider/>
				<Spacer y={5}/>
				<div className="max-w-full self-center items-center">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src={image}
						width={300}
					/>
				</div>
				<Spacer y={5}/>
        <AddToCartButton {...mealPlan}></AddToCartButton>
      </CardBody>
    </Card>
  );
}

export default function Page() {
  return (
    <>
      <h1 className={title()}>Dining Passes</h1>
      <Spacer y={10} />
      <h4>Please spend your hard earned money on some potatoes.</h4>
      <Spacer y={10} />
      <Divider />
      <Spacer y={10} />
      <div className="w-full grid gap-2 grid-cols-2 grid-rows-1">
        <MealCard mealPlan={singleMonth} image="/assets/dining/cereal.png" />
        <MealCard mealPlan={fourMonth} image="/assets/dining/dish.png" />
      </div>
      <Spacer y={10} />
      <Divider />
    </>
  );
}

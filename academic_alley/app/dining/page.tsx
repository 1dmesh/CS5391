import React from "react";
import {
	Card, 
	CardHeader, 
	CardBody, 
	Image
} from "@nextui-org/react";

/*
https://www.flaticon.com/free-icon/cereal_5371118?related_id=5473629&origin=search
https://www.flaticon.com/free-icon/cutlery_3170733
https://www.flaticon.com/free-icon/dish_1065715
*/

function MealCard({
	header,
	image,
}) {
	return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
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
		<div className="grid gap-2 grid-cols-3 grid-rows-1">
			<MealCard 
				header=""
				image="/cereal.png"/>
			<MealCard 
				header=""
				image="/dish.png"/>
			<MealCard 
				header=""
				image="/cutlery.png"/>
		</div>
  );
}

"use client"
import React from "react";
import { title } from "@/components/primitives";
import { 
	Card,
	DateRangePicker, 
	Divider, 
	Spacer 
} from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

import { eventData } from "@/app/events/eventData"

export default function Page() {
  let formatter = useDateFormatter({dateStyle: "long"});
	const [duration, setDuration] = React.useState()

	const durationChange = (d) => {
		console.log(formatter.formatRangeToParts(
			d.start.toDate(getLocalTimeZone()),
			d.end.toDate(getLocalTimeZone()),
		))
		setDuration(formatter.formatRangeToParts(
			d.start.toDate(getLocalTimeZone()),
			d.end.toDate(getLocalTimeZone()),
		))
	}

	return (
		<div>
			<h1 className={title()}>Events</h1>
      <Spacer y={5}/>
			<h4>
				Find activities you want to attend such as sports
				related activities or parties!
			</h4>
      <Spacer y={10}/>
      <Divider/>
      <Spacer y={10}/>
			<div className="flex w-full flex-wrap md:flex-nowrap gap-4">
				<DateRangePicker 
					label="Enter a date range:"
					onChange={durationChange}
					minValue={today(getLocalTimeZone())}
				/>
			</div>
      <Spacer y={10}/>
      <Divider/>
      <Spacer y={5}/>
			<div className="grid grid-cols-3">
				{
					eventData.map((e, i) => {
						if(duration != null) {
							console.log(typeof(e.year))
							console.log(typeof(duration[6].value))
						}
						if (duration != null && e.year === Number(duration[6].value)) {
								return <Card key={i}>
									<h1>{e.title}</h1>
									<h2>{e.description}</h2>
								</Card>
						}
						return <React.Fragment key={i}/>
					})
				}
			</div>
		</div>
	);
}

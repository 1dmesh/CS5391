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

const MONTHS = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
}

export default function Page() {
  let formatter = useDateFormatter({dateStyle: "long"});
	const [duration, setDuration] = React.useState(null)

	const durationChange = (d) => {
		let parts = formatter.formatRangeToParts(
			d.start.toDate(getLocalTimeZone()),
			d.end.toDate(getLocalTimeZone()),
		)
		if (parts.length === 7) {
			setDuration({
				month1: Number(MONTHS[parts[0].value]),
				day1: Number(parts[2].value),
				month2: Number(MONTHS[parts[0].value]),
				day2: Number(parts[4].value),
				year: Number(parts[6].value)
			})
		} else if (parts.length === 9) {
			setDuration({
				month1: Number(MONTHS[parts[0].value]),
				day1: Number(parts[2].value),
				month2: Number(MONTHS[parts[4].value]),
				day2: Number(parts[6].value),
				year: Number(parts[8].value)
			})
		}
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
			<div className="grid grid-cols-3 gap-4">
				{
					eventData.map((e, i) => {
						if (duration === null) {
							return <Card key={i}>
								<Spacer y={2}/>
								<div className="p-4">
									<h1>{e.title} ({e.month}-{e.date}-{e.year})</h1>
									<Spacer y={2}/>
									<Divider/>
									<Spacer y={2}/>
									<h2>{e.description}</h2>
								</div>
								<Spacer y={2}/>
							</Card>
						} else if (duration != null && 
							e.year === duration.year &&
							e.month >= duration.month1 &&
							e.month <= duration.month2 &&
							e.date >= duration.day1 &&
							e.date <= duration.day2) {
								return <Card key={i}>
									<Spacer y={2}/>
									<div className="p-4">
										<h1>{e.title} ({e.month}-{e.date}-{e.year})</h1>
										<Spacer y={2}/>
										<Divider/>
										<Spacer y={2}/>
										<h2>{e.description}</h2>
									</div>
									<Spacer y={2}/>
								</Card>
						}
						return <React.Fragment key={i}/>
					})
				}
			</div>
		</div>
	);
}

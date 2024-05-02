"use client"
import React from "react";
import { title } from "@/components/primitives";
import { 
	Button,
	Card,
	DateRangePicker, 
	Divider, 
	Spacer 
} from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance } from "@/components/firebase"
import { eventData } from "@/app/events/eventData"
import { updateRSPV } from "@/app/rspv_logic"

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
	const [user, setUser] = React.useState()
	const [userRSPV, setUserRSPV] = React.useState(null)
	const [duration, setDuration] = React.useState(null)

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
  });

	React.useEffect(() => { 
		updateUserStorage() 
	}, [user])

	const updateUserStorage = () => {
		if (user != null) {
			let RSPV = {};
			if (localStorage.getItem("RSPV")) {
				RSPV = JSON.parse(localStorage.getItem("RSPV"));
			}
			let rspv = RSPV[user.email]
			if(typeof rspv === "undefined") {
				rspv = null
			}
			setUserRSPV(rspv)
		}
	}

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
      <Spacer y={10}/>
			<div className="grid grid-cols-3 gap-4">
				{
					eventData.map((e, i) => {
						const card = (
							<Card key={i}>
								<Spacer y={2}/>
								<div className="p-4">
									<h1>{e.title} ({e.month}-{e.date}-{e.year})</h1>
									<Spacer y={2}/>
									<Divider/>
									<Spacer y={2}/>
									<h2>{e.description}</h2>
									<Spacer y={4}/>
									{user != null &&
									!userRSPV?.some(dict => dict.title === e.title) && 
										<Button 
											className="w-full"
											onPress={(_) => 
												setUserRSPV(updateRSPV(user, e, "ADD"))
											}>
												RSPV
										</Button>
									}
									{userRSPV != null && 
									userRSPV.some(dict => dict.title === e.title) && 
										<Button 
											className="w-full"
											onPress={(_) => 
												setUserRSPV(updateRSPV(user, e, "REMOVE"))
											}>
												Remove RSPV
										</Button>
									}
									{user === null &&
										<Button 
											isDisabled
											className="w-full">
												Login to RSPV
										</Button>
									}
								</div>
								<Spacer y={2}/>
							</Card>
						)
						if (duration === null) {
							return card
						} else if (duration != null && 
							e.year === duration.year &&
							e.month >= duration.month1 &&
							e.month <= duration.month2 &&
							e.date >= duration.day1 &&
							e.date <= duration.day2) {
								return card
						}
						return <React.Fragment key={i}/>
					})
				}
			</div>
		</div>
	);
}
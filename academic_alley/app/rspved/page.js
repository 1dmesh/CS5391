"use client"
import React from "react";
import { title } from "@/components/primitives";
import {
	Button,
	Card,
	Divider, 
	Spacer 
} from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance } from "@/components/firebase"
import { updateRSPV } from "@/app/rspv_logic"

const MONTHS = {
	0: 'Error',
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export default function Page() {
	const [user, setUser] = React.useState()
	const [userRSPV, setUserRSPV] = React.useState(null)

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
			const byMonth = {};
			rspv.forEach(item => {
				const match = item.date.match(/\d+(?=-)/)
				let month = match ? parseInt(match[0]) : 0
				month = MONTHS[month]
				if (!byMonth[month]) {
					byMonth[month] = [];
				}
				byMonth[month].push(item);
			});
			setUserRSPV(byMonth)
		}
	}

	return (
		<>
			<h1 className={title()}>RSPV'ed Events</h1>
      <Spacer y={5}/>
			<h4>
        These are the events you RSPV'ed to.
			</h4>
      <Spacer y={10}/>
      <Divider/>
      <Spacer y={10}/>
			{userRSPV != null && 
				<>
					{Object.keys(userRSPV).map(month => {
						return (
							<>
								<h1>{month}</h1>
								<Spacer y={5}/>
								<Divider/>
								<Spacer y={5}/>
								<div className="grid grid-cols-3 gap-4">
									{userRSPV[month].map((e, i) => {
										return (
												<Card key={i}>
													<Spacer y={2}/>
													<div className="p-4">
														<h1>{e.title} ({e.date})</h1>
														<Spacer y={2}/>
														<Divider/>
														<Spacer y={2}/>
														<h2>{e.description}</h2>
														<Spacer y={4}/>
														<Button 
															className="w-full"
															onPress={(_) => {
																let rspv = updateRSPV(user, e, "REMOVE")
																const byMonth = {};
																rspv.forEach(item => {
																	const match = item.date.match(/\d+(?=-)/)
																	let month = match ? parseInt(match[0]) : 0
																	month = MONTHS[month]
																	if (!byMonth[month]) {
																		byMonth[month] = [];
																	}
																	byMonth[month].push(item);
																});
																setUserRSPV(byMonth)
															}}>
																Remove RSPV
														</Button>
													</div>
													<Spacer y={2}/>
												</Card>
										)}
									)}
								</div>
								<Spacer y={5}/>
							</>
						)}
					)}
				</>
			}
			{(userRSPV === null || userRSPV.length === 0)&& 
				<h4>
					You have not RSPV'ed to any events :(
				</h4>
			}
		</>
	);
}
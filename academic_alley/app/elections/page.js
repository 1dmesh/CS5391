/*
The website runs a poll to test whom users will vote for in a fictitious 
election of the head of the student union. You can store the results 
of the poll in a database and draw a bar chart of the results using 
the image functions. Suppose the three candidates are: 
John, Mary, and Susa
*/
"use client"
import React from "react";
import { Chart } from "chart.js";
import 'chart.js/auto'; // ADD THIS
import {
	RadioGroup,
	Radio,
	Card,
	Divider,
	Spacer
} from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance } from "@/components/firebase"

const electionData = {
	forElection: [
		{
			name: "John",
			votes: 0,
			currentlySelected: false,
		},
		{
			name: "Mary",
			votes: 0,
			currentlySelected: false,
		},
		{
			name: "Susan",
			votes: 0,
			currentlySelected: false,
		}
	],
	voted: []
}

function VoteSection({
	alreadyVoted,
	setAlreadyVoted
}) {
	const [user, setUser] = React.useState()
	const [disabled, setDisabled] = React.useState(false)

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
		console.log(u)
  });

	React.useEffect(() => {
		setDisabled(user && !alreadyVoted)
	}, [user, alreadyVoted])

	return (
		<div className="justify-self-center self-center">
			<RadioGroup
				label="Select your candidate:">
				{
					electionData.forElection.map((person, key) => {
						return (
							<Radio 
								key={key}
								value={person.name}>
									{person.name}
							</Radio>
						);
					})
				}
			</RadioGroup>
			{ !user && 
				<>
					<Spacer y={10}/>
					<p className="text-small font-bold">
						You must be logged in to vote.
					</p>
				</> 
			}
			{ user && 
				<>
				</>
			}
		</div>
	);
}

function ResultsSection() {
	var chart = null;
  React.useEffect(() => {
    var ctx = document.getElementById('barPlot').getContext('2d');
    if(chart){
			chart.clear();
			chart.destroy();
    }
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["John", "Marry", "Susan"],
        datasets: [{
          data: [10, 5, 20],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }]
      },
    });
  }, [])

	return (
		<div className="w-[85%] h-[45%] justify-self-center self-center">
			<canvas id='barPlot'></canvas>
		</div>
	);
}

export default function Page() {  
	const [alreadyVoted, setAlreadyVoted] = React.useState(false)
	
  return (
		<div className="h-full w-full flex flex-wrap content-center justify-center">
			<Card 
				style={{ height: '75%', width: '100%' }}
				className="flex flex-wrap content-center justify-center">
					<div className="w-full h-full grid grid-cols-2">
						<VoteSection 
							alreadyVoted={alreadyVoted}
							setAlreadyVoted={setAlreadyVoted}/>
						<ResultsSection/>
					</div>
			</Card>
		</div>
  )
}
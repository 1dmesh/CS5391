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
import 'chart.js/auto';
import {
	RadioGroup,
	Radio,
	Card,
	Spacer,
	Button
} from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance } from "@/components/firebase"

var permState = {
	forElection: [
		{
			name: "John",
			votes: 2,
		},
		{
			name: "Mary",
			votes: 10,
		},
		{
			name: "Susan",
			votes: 21,
		}
	],
	voted: []
};

function VoteSection({
	user,
	setShowResults,
	electionData,
	setElectionData
}) {
	const [currVote, setCurrVote] = React.useState(null)
	const [disabled, setDisabled] = React.useState(false)

	React.useEffect(() => {
		setDisabled(user === null || (user != null && electionData.voted.map((c) => c.who).includes(user.email)))
		setShowResults(user != null && electionData.voted.includes(user.email))
	}, [user])

	const submit = () => {
		if (currVote != null) {
			setElectionData(
				{
					forElection: electionData.forElection.map((c) => {
						var votes = c.votes
						if (c.name === currVote) {
							votes++
						}
						return {name: c.name, votes: votes}
					}),
					voted: [...electionData.voted, {who: user.email, for: currVote}]
				})
				setShowResults(true)
		} else {
			alert("You must choose a candidate to submit your vote.")
		}
	}

	return (
		<div className="justify-self-center self-center">
			<RadioGroup
				label="Select your candidate:"
				onValueChange={(val) => setCurrVote(val)}>
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
			<Spacer y={10}/>
			<Button 
				isDisabled={disabled}
				onPress={submit}>
				Submit
			</Button>
			{ !user && 
				<>
					<Spacer y={10}/>
					<p className="text-small font-bold">
						You must be logged in to vote.
					</p>
				</> 
			}
		</div>
	);
}

function ResultsSection({user, electionData}) {
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
        labels: electionData.forElection.map(c => c.name),
        datasets: [{
          data: electionData.forElection.map(c => c.votes),
          label: "Votes",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],
				borderWidth: 1
      },
    });
  }, [electionData])

	const getVotedFor = () => {
		var votedFor
		electionData.voted.map((v) => {
			if (user.email === v.who) {
				votedFor = v.for
			}
		})
		return votedFor
	}

	return (
		<div className="w-[85%] h-[85%] justify-self-center self-center">
			<p className="text-md font-bold">
				You voted for {getVotedFor()}.
			</p>
			<Spacer y={5}/>
			<canvas id='barPlot'></canvas>
		</div>
	);
}

export default function Page() {  
	const [user, setUser] = React.useState()
	const [showResults, setShowResults] = React.useState(false)
	const [electionData, setElectionData] = React.useState(permState)

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
  });

	React.useEffect(() => { 
		permState = electionData; 
	}, [electionData])
	
  return (
		<div className="h-full w-full flex flex-wrap content-center justify-center">
			<Card 
				style={{ height: showResults ? '75%' : '50%', width: showResults ? '100%' : '50%' }}
				className="flex flex-wrap content-center justify-center">
					{showResults && 
						<ResultsSection 
							user={user}
							electionData={electionData}/>
					}
					{!showResults && 
					<VoteSection 
						user={user}
						setShowResults={setShowResults}
						electionData={electionData}
						setElectionData={setElectionData}/>
					}
			</Card>
		</div>
  )
}
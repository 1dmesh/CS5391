
/*
Images:
	- https://www.pexels.com/photo/group-of-people-enjoying-music-concert-325521/
	- https://res.cloudinary.com/jerrick/image/upload/v1571145256/5da5c628d95c8e001d0b68d5.jpg
	- https://channellife.co.nz/uploads/story/2022/07/04/GettyImages-1249219777.webp
*/
"use client"
import React from "react";
import { 
	Card, 
	CardHeader, 
	Image 
} from "@nextui-org/react";

export default function Page() {
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				<Card className="col-span-2 h-[400px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold drop-shadow-md">
							Elections & Events
						</p>
						<h4 className="text-white font-medium text-large drop-shadow-md">
							Find ways to get involved in your community.
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover object-left-bottom"
						src="/assets/homepage/involvement.png"/>
				</Card>
				<Card className="col-span-1 h-[400px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold drop-shadow-md">
							Connections
						</p>
						<h4 className="text-white font-medium text-large drop-shadow-md">
							Search for connections.
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover object-top-left"
						src="/assets/homepage/newpeople.png"/>
				</Card>
				<Card className="col-span-1 h-[400px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold drop-shadow-md">
							Services
						</p>
						<h4 className="text-white font-medium text-large drop-shadow-md">
							Explore our online services.
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover object-top-left"
						src="/assets/homepage/services.png"/>
				</Card>
			</div>
		</>
	);
}

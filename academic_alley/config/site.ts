export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	// 	Connect 
	//		People (Search)
	//		Roommates (Search)
	// 	Get Involved
	//		Events (RSVP and Search)
	//		Elections
	//	Textbooks
	//	Meal Plans
	//	Bus Tickets
	//
	// Cart Icon (could just be a modal)
	//		Show cart
	//		Checkout
	// Account Icon / Login (if not logged in)
	//		View Account
	//		Sign Out

	navDropdowns: [
		{
			label: "Involvement",
			pages: [
				{
					label: "Events",
					href: "/events"
				},
				{
					label: "Elections",
					href: "/elections"
				},
			]
		},
		{
			label: "Connections",
			pages: [
				{
					label: "Students and Faculty",
					href: "/people"
				},
				{
					label: "Roommates",
					href: "/roommates"
				},
			]
		},
	],
	navItems: [
		{
			label: "Textbooks",
			href: "/textbooks",
		},
		{
			label: "Dining",
			href: "/dining",
		},
		{
			label: "Transportation",
			href: "/transportation",
		}
	],
	// navMenuItems: [],
  // TODO: these appear in the popup menu on the right of the navbar
  // consider making these identical to the navbar or removing the menu entirely
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};

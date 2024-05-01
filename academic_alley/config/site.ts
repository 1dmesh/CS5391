export type SiteConfig = typeof siteConfig;

export const siteConfig = {
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
		{
			label: "Services",
			pages: [
				{
					label: "Textbooks",
					href: "/textbooks"
				},
				{
					label: "Dining",
					href: "/dining"
				},
				{
					label: "Transportation",
					href: "/transportation"
				},
			]
		}
	],
  // TODO: these appear in the popup menu on the right of the navbar
  // consider making these identical to the navbar or removing the menu entirely
	navMenuItems: [
		{
			label: "Events",
			href: "/events",
		},
		{
			label: "Elections",
			href: "/elections",
		},
		{
			label: "Students & Faculty",
			href: "/people",
		},
		{
			label: "Roommates",
			href: "/roommates",
		},
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
		},
	],
};

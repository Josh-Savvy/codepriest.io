import { IFooter, IRoute } from "interfaces";

export const routes: IRoute[] = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Projects",
		path: "/projects",
	},
];

export const footer: IFooter = {
	columns: [
		{
			title: "Pages",
			links: [
				{
					name: "Home",
					link: "/",
					leavesWebsite: false,
				},
				// {
				//   name: "Blog",
				//   link: "/blog",
				//   leavesWebsite: false,
				// },
				{
					name: "Projects",
					link: "/projects",
					leavesWebsite: false,
				},
				{
					name: "Designs",
					link: "/designs",
					leavesWebsite: false,
				},
			],
		},
		{
			title: "Social",
			links: [
				{
					name: "GitHub",
					link: "https://github.com/braydentw",
					icon: "/assets/icons/github-f.svg",
					leavesWebsite: true,
				},
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/braydentw/",
					icon: "/assets/icons/linkedin-f.svg",
					leavesWebsite: true,
				},
				{
					name: "Dribbble",
					link: "https://dribbble.com/braydentw",
					icon: "/assets/icons/dribbble-f.svg",
					leavesWebsite: true,
				},
				{
					name: "IndieHackers",
					link: "https://indiehackers.com/braydentw",
					icon: "/assets/icons/indiehackers-f.svg",
					leavesWebsite: true,
				},
				{
					name: "Email",
					link: "mailto:contact@braydentw.io",
					icon: "/assets/icons/mail-f.svg",
					leavesWebsite: true,
				},
			],
		},
	],
	support: {
		buymeacoffee: "braydenw",
		paypal: "braydentw",
		message: "I appreciate your support very much! 💙",
	},
};

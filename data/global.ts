import { IFooterCol, IRoute } from "interfaces";

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

export const footer: IFooterCol[] = [
	{
		name: "GitHub",
		link: "https://github.com/Josh-Savvy",
		icon: "/assets/icons/github-f.svg",
		leavesWebsite: true,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/joshua-joseph28/",
		icon: "/assets/icons/linkedin-f.svg",
		leavesWebsite: true,
	},
	{
		name: "IndieHackers",
		link: "https://www.indiehackers.com/CodePriest",
		icon: "/assets/icons/indiehackers-f.svg",
		leavesWebsite: true,
	},
	{
		name: "Email",
		link: "mailto:joshdev47@gail.com",
		icon: "/assets/icons/mail-f.svg",
		leavesWebsite: true,
	},
];

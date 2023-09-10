import { kebabCase, kebabArray } from "@/utils/index";
import { IProject } from "interfaces";

const projects: IProject[] = [
	{
		id: 0,
		title: "PeraDB",
		desc:
			"Explore a Vast Movie Library: Dive into a vast, carefully curated collection of movies from various genres and eras, ensuring an endless source of cinematic entertainment.",
		img: "/assets/projects/pera_db.png",
		link: "https://pera-db.vercel.app",
		tags: ["React", "NextJS", "TailwindCSS", "Animate.css", "TypeScript", "API"],
		github: "https://github.com/Josh-Savvy/pera_frontend_engineer_test",
	},
	{
		id: 1,
		title: "Eureka",
		desc:
			"A simple mobile dating application designed to help users find meaningful connections with ease. Whether you're searching for love, friendship, or companionship.",
		img: "/assets/projects/eureka.png",
		github: "https://github.com/Josh-Savvy/Eureka",
		tags: ["React", "ReactNative", "TailwindCSS", "Expo", "TypeScript"],
	},
	{
		id: 2,
		title: "Youtube Clone",
		desc: "////",
		img: "/assets/projects/youtube.png",
		link: "https://youtube-clone-client.vercel.app/",
		github: "https://github.com/braydentw/learn.theyei",
		tags: ["React", "NextJS", "TailwindCSS", "TypeScript"],
	},

	{
		id: 3,
		title: "BitcoinTemp",
		desc:
			"A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
		img: "/assets/projects/bitcointemp.png",
		link: "https://bitcointemp.com",
		tags: ["React", "NextJS", "SCSS", "API"],
	},
	{
		id: 4,
		title: "Create HTML Boilerplate",
		desc: "Generate a vanilla HTML boilerplate in a flash!",
		img: "/assets/projects/create-html-boilerplate.png",
		github: "https://github.com/BraydenTW/create-html-boilerplate",
		tags: ["Node", "Javascript", "NPM", "HTML"],
	},
	{
		id: 5,
		title: "8 Ball in your CLI",
		desc: "An 8 ball simulation in your CLI built with Rust!",
		img: "/assets/projects/8ball-rust.png",
		github: "https://github.com/BraydenTW/8ball-rust",
		tags: ["Rust", "CLI", "Game"],
	},
	{
		id: 6,
		title: "DontLeaveMe 😭",
		desc: "Beg for users to stay on your website.",
		img: "/assets/projects/dontleaveme.png",
		link: "https://github.com/BraydenTW/dontleaveme/",
		tags: ["Javascript", "NPM"],
	},
	{
		id: 7,
		title: "Madlibs",
		desc: "A simple version of Madlibs built for the web!",
		img: "/assets/projects/madlibs.png",
		link: "https://fillemin.netlify.app/",
		github: "https://github.com/braydentw/madlibs",
		tags: ["HTML", "CSS", "Javascript"],
	},
];

export const allTags: string[] = [];

projects.forEach((project: IProject) => {
	project.tags.map((tag: string) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;

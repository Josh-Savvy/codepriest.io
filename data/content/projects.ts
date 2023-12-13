import { kebabCase, kebabArray } from "@/utils/index";
import { IProject } from "interfaces";

const projects: IProject[] = [
	{
		id: 0,
		title: "PeraDB",
		desc: "Explore a Vast Movie Library: Dive into a vast, carefully curated collection of movies from various genres and eras, ensuring an endless source of cinematic entertainment.",
		img: "/assets/projects/pera_db.png",
		link: "https://pera-db.vercel.app",
		tags: ["React", "NextJS", "TailwindCSS", "Animate.css", "TypeScript", "API"],
		github: "https://github.com/Josh-Savvy/pera_frontend_engineer_test",
		personal: true,
	},
	{
		id: 1,
		title: "Paytrac",
		desc: "This application is designed to simplify payment management for small businesses, providing a user-friendly platform for efficient invoicing and invoice tracking.",
		img: "/assets/projects/paytrac_main.png",
		github: "https://github.com/Josh-Savvy/klusterthon_paytrac.git",
		tags: ["React", "TypeScript", "React Native", "Expo", "RTK"],
		personal: true,
	},
	{
		id: 2,
		title: "Techsity Academy",
		desc: "A comprehensive learning platform dedicated to empowering individuals with technical soft skills and guiding them toward a successful career in tech.",
		img: "/assets/projects/techsity_academy.png",
		link: "https://academy.techsity.io/",
		tags: ["TypeScript", "Strapi", "React", "NextJS", "TailwindCSS"],
	},
	{
		id: 3,
		title: "EnrolledAgent.com",
		desc: "EnrolledAgent.com is an online platform where you can effortlessly search and connect with an Enrolled Agent for your comprehensive tax services.",
		img: "/assets/projects/enrolled.jpg",
		link: "https://enrolledagent.com/",
		tags: ["React", "NextJS", "Bootstrap", "TypeScript", "Redux"],
	},
	{
		id: 4,
		title: "Car Rental Website",
		desc: "A go-to platform for hassle-free and reliable car rentals.",
		img: "/assets/projects/auto.png",
		link: "https://creative-valkyrie-e7cf2e.netlify.app",
		tags: ["NextJS", "TypeScript", "Animate.css", "Framer-motion", "React", "TailwindCSS"],
		github: "https://github.com/Josh-Savvy/car_rental_website_autochek",
		personal: true,
	},
	{
		id: 5,
		title: "Eureka",
		desc: "A simple mobile dating application designed to help users find meaningful connections with ease. Whether you're searching for love, friendship, or companionship.",
		// img: "/assets/projects/eureka.png",
		img: "",
		github: "https://github.com/Josh-Savvy/Eureka",
		tags: ["React", "React Native", "TailwindCSS", "Expo", "TypeScript"],
		personal: true,
	},
	{
		id: 6,
		title: "Youtube Clone",
		desc: "A YouTube clone app",
		img: "/assets/projects/youtube.png",
		link: "https://youtube-clone-client.vercel.app/",
		github: "https://github.com/Josh-Savvy/youtube_clone_client",
		tags: ["React", "NextJS", "TailwindCSS", "TypeScript"],
		personal: true,
	},
	{
		id: 7,
		title: "Notes App",
		desc: "A simple-lightweight note-taking application.",
		img: "/assets/projects/notes_app.png",
		github: "https://github.com/Josh-Savvy/NOTY",
		tags: ["React Native", "React", "TypeScript", "Expo"],
		personal: true,
	},
];

export const allTags: string[] = [];

projects.forEach((project: IProject) => {
	project.tags.map((tag: string) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;

type Skill = {
	title: string;
	icon: string;
	style?: object;
};
type Testimonial = {
	quote: string;
	name: string;
	job: string;
};

export const skills: Skill[] = [
	{
		title: "Javascript",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		title: "Sass",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
	},
	{
		title: "TailwindCSS",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
	},
	{
		title: "AWS",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
	},
	{
		title: "React",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		title: "NextJS",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
		style: { filter: "invert(1)" },
	},
	{
		title: "Typescript",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	},
	{
		title: "NodeJS",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	{
		title: "Laravel",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
	},
	{
		title: "Git",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		title: "GraphQl",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
	},
	{
		title: "NestJS",
		icon:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
	},
];

export const testimonials: Testimonial[] = [
	{
		quote:
			"The communication throughout the project was spot on and the genre of design was carried out well.",
		name: "Chigbo Raphael",
		job: "PM at Techsity",
	},
	{
		quote:
			"The communication throughout the project was spot on and the genre of design was carried out well.",
		name: "Chigbo Raphael",
		job: "PM at Techsity",
	},
	{
		quote:
			"The communication throughout the project was spot on and the genre of design was carried out well.",
		name: "Chigbo Raphael",
		job: "PM at Techsity",
	},
	{
		quote:
			"The code was clean, easy to understand, and exactly what I was looking for.",
		name: "Lady Esther",
		job: "Mobile App Developer",
	},
	{
		quote:
			"Lorem Ipsum dolor jsijdkvdvukjvshj vsndvhjskvshkdv sdvjsnvhs vskbvsbv sdsdcv.",
		name: "Oluwatosin Akande",
		job: "Backend Engineer",
	},
	{
		quote:
			"The code was clean, easy to understand, and exactly what I was looking for.",
		name: "Joshua Olabode",
		job: "VP at (Techsity)",
	},
];

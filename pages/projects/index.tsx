import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Layout from "@/components/ui/layout";
import ProjectsList from "components/projects/Projects";
import React from "react";
import { NextPage } from "next";

const Projects: NextPage = (): React.JSX.Element => {
	return (
		<Layout
			currentPage="Projects"
			meta={{
				title: "Projects",
				desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
			}}>
			<Heading />
			<ProjectsList />
			<More />
		</Layout>
	);
};

export default Projects;

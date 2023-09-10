import React from "react";
import projects from "@/data/content/projects";
import { IProjectProps } from "interfaces";
import { kebabCase } from "@/utils/index";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = ({ overwriteProjects }: IProjectProps) => {
	const projectsList = overwriteProjects ? overwriteProjects : projects;
	return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
			{projectsList.map((item) => {
				return <ProjectCard key={item.id} project={item} />;
			})}
		</div>
	);
};

export default Projects;

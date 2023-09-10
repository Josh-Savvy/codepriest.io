import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";

import ProjectCard from "../projects/ProjectCard";

const Projects = () => {
	return (
		<div className="flex flex-col text-left justify-between pt-8 relative">
			<div id="learnmore">
				<SectionTitle title="Here are highlights of my favorite projects." />
			</div>
			<div className="grid sm:grid-cols-2 gap-12 md:gap-5 lg:grid-cols-3 items-start">
				{projects.slice(0, 3).map((item) => {
					return <ProjectCard key={item.id} project={item} />;
				})}
			</div>
			<div className="relative w-full mt-2">
				<Link href="/projects">
					<div className="mt-8 max-w-sm md:max-w-2xl border border-white duration-300 hover:border-yellow-600 mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text:white hover:border-yellow-600 hover:bg-yellow-600 text-white transition-colors cursor-pointer">
						View All
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Projects;

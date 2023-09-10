import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/index";
import Link from "next/link";
import { IProject } from "interfaces";

function ProjectCard({ project }: { project: IProject }) {
	return (
		<div
			className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
			key={project.id}
		>
			<a
				href={project.link || project.github}
				target="_blank"
				className={`w-full relative rounded-xl border-fun-gray border overflow-hidden md:min-h-[250px] md:max-h-[250px] p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
			>
				<img className="w-full rounded-md h-full md:min-h-[250px]" src={project.img} />
			</a>
			<div className="w-full mt-5">
				<div className="flex projects-center justify-between">
					<a href={project.link || project.github} target="_blank">
						<h3 className="text-lg font-bold">{project.title}</h3>
					</a>
					<div className="space-x-2">
						{project.link && (
							<a href={project.link} target="_blank" rel="noreferrer">
								<Image
									src="/assets/icons/external-link.svg"
									width={16}
									height={16}
									alt="Link Icon"
								/>
							</a>
						)}
						{project.github && (
							<a href={project.github} target="_blank" rel="noreferrer">
								<Image
									src="/assets/icons/github.svg"
									width={16}
									height={16}
									alt="Github Icon"
								/>
							</a>
						)}
					</div>
				</div>
				<p className="text-fun-gray text-left text-sm">{project.desc}</p>
				<ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
					{project.tags.map((tag, index) => {
						return (
							<li key={tag}>
								<Link href={`/projects/tag/${kebabCase(tag)}`}>
									<div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
										{tag}
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ProjectCard;
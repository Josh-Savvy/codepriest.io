import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/index";
import Link from "next/link";
import { IProject } from "interfaces";

function ProjectCard({ project }: { project: IProject }) {
	return (
		<div className="md:my-6 max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center max-h-[350px]">
			<a
				href={project.link || project.github || "#"}
				target="_blank"
				className={`w-full h-full relative rounded-xl border-fun-gray border overflow-hidden md:min-h-[200px] md:max-h-[200px] p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-yellow-600 will-change-projectCard`}>
				{project.img ? (
					<img
						className="w-full rounded-md h-full md:min-h-[200px]"
						src={project.img || "/assets/svgs/image_not_found.svg"}
					/>
				) : (
					<div className="flex flex-col justify-center items-center mt-12">
						<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none">
							<path
								d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M12 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M4.04193 18.2622C4.07264 18.5226 4.12583 18.7271 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12M16 3L18.5 5.5M18.5 5.5L21 8M18.5 5.5L21 3M18.5 5.5L16 8"
								stroke="#fff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="text-center">couldn't load image</p>
					</div>
				)}
			</a>
			<div className="w-full mt-5">
				<div className="flex items-center justify-between">
					<a href={project.link || project.github} target="_blank">
						<h3 className="text-lg font-bold">{project.title}</h3>
					</a>
					{/* {!project.personal && (
						<p className="text-xs bg-yellow-900 cursor-default duration-300 p-0.5 px-3 rounded">Official</p>
					)} */}
					<div className="space-x-2">
						{project.link && (
							<a href={project.link} target="_blank" rel="noreferrer">
								<Image src="/assets/icons/external-link.svg" width={16} height={16} alt="Link Icon" />
							</a>
						)}
						{project.github && (
							<a href={project.github} target="_blank" rel="noreferrer">
								<Image src="/assets/icons/github.svg" width={16} height={16} alt="Github Icon" />
							</a>
						)}
					</div>
				</div>
				<p className="text-fun-gray text-left text-sm">{project.desc}</p>
				<ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
					{project.tags.map((tag, index) => {
						return (
							<li key={tag}>
								<Link prefetch={false} href={`/projects/tag/${kebabCase(tag)}`}>
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

import Page from "@/components/ui/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { allKebabTags, allTags } from "@/data/content/projects";
import projects from "@/data/content/projects";
import { kebabCase, kebabArray } from "@/utils/index";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";
import Layout from "@/components/ui/layout";
import { IProject } from "interfaces";

export const getStaticPaths: GetStaticPaths = async () => {
	const allTags: string[] = [];
	projects.forEach((project: IProject) =>
		project.tags.forEach((tag: string) => {
			allTags.push(tag);
		}),
	);
	const uniqueAllTags = [...new Set(allTags)];
	const allTagsPaths = uniqueAllTags.map((path) => ({
		params: { tag: `${kebabCase(path)}` },
	}));
	return {
		paths: allTagsPaths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: { params: { tag: string } }) => {
	const tag = params?.tag;
	const filteredProjects = await projects.filter((project) => [...kebabArray(project.tags)].includes(tag));
	return {
		props: { filteredProjects, tag },
	};
};

const ProjectWithTag = ({ filteredProjects, tag }: { filteredProjects: any[]; tag: string }) => {
	const capsTag = allTags[allKebabTags.indexOf(tag)];
	return (
		<Layout
			currentPage="Projects"
			meta={{
				title: `${capsTag} Projects`,
				desc: `A showcase for all of my ${capsTag} projects.`,
			}}>
			<Heading tag={capsTag} />
			<Projects overwriteProjects={filteredProjects} />

			<Link  href="/projects" prefetch={false}>
				<div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
					View All
				</div>
			</Link>
			{/* <More /> */}
		</Layout>
	);
};

export default ProjectWithTag;

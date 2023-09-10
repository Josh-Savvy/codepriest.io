export interface IProject {
	id: number;
	title: string;
	desc: string;
	img: string;
	link?: string;
	github?: string;
	tags: string[];
}

export interface IRoute {
	title: string;
	path: string;
}

export interface IFooterCol {
	title: string;
	links: {
		name: string;
		link: string;
		icon?: string;
		leavesWebsite: boolean;
	}[];
}

export interface IFooter {
	columns: IFooterCol[];
	support: {
		buymeacoffee: string;
		paypal: string;
		message: string;
	};
}
export interface IProjectProps {
	overwriteProjects?: IProject[];
}

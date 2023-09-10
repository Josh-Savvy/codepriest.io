import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

const Navbar = ({ currentPage }: { currentPage: string }): JSX.Element => {
	return (
		<nav className="flex items-center justify-between pt-6">
			<li className="list-none font-bold text-lg cursor-pointer">
				<Link href="/">
					<span className="select-none font-black text-3xl flex items-center">
						{"Joshua".split("").map((letter, index) => {
							return (
								<span
									key={index}
									className="hover:text-yellow-600 hover:-mt-2 transition-all duration-500 hover:duration-100"
								>
									{letter}
								</span>
							);
						})}
					</span>
				</Link>
			</li>
			<ul className="flex items-center space-x-10">
				{routes.map((item, index) => {
					return (
						<li
							key={index}
							className={`list-none text-white ${
								currentPage === item.title
									? "opacity-100"
									: "opacity-40 hover:opacity-100 transition-opacity"
							}`}
						>
							<Link href={item.path}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

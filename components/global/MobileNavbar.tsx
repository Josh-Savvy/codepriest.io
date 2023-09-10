import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/data/global";
import useDelayedRender from "use-delayed-render";
import { CrossIcon, MenuIcon } from "../ui/common/svgs";

const MobileNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
		isMenuOpen,
		{
			enterDelay: 20,
			exitDelay: 300,
		},
	);

	const toggleMenu = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
			document.body.style.overflow = "";
		} else {
			setIsMenuOpen(true);
			document.body.style.overflow = "hidden";
		}
	};

	useEffect(() => {
		return function cleanup() {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<nav>
			<div
				className={`w-full justify-between flex items-center ${
					isMenuRendered && "bg-bg"
				} p-5`}
				style={{ zIndex: 101 }}
			>
				<li className="list-none font-bold text-lg">
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
				<button
					className="burger visible md:hidden"
					aria-label="Toggle menu"
					type="button"
					onClick={toggleMenu}
				>
					<MenuIcon data-hide={isMenuOpen} />
					<CrossIcon data-hide={!isMenuOpen} />
				</button>
			</div>
			{isMenuMounted && (
				<ul
					className={`menu flex flex-col absolute bg-bg
            ${isMenuRendered && "menuRendered"}`}
				>
					{routes.map((item, index) => {
						return (
							<li
								className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
								style={{ transitionDelay: `${150 + index * 25}ms` }}
							>
								<Link href={item.path}>
									<a className="flex w-auto pb-4">{item.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export default MobileNavbar;

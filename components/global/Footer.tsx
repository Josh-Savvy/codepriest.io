import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
			<div className="w-full max-w-4xl m-auto flex items-center justify-between items-start">
				{footer.map((item, index) => {
					return (
						<div key={index} className="text-left mb-5 sm:mb-0">
							<a
								href={item.link}
								target="_blank"
								className="items-center flex items-center gap-5"
							>
								{item.icon && (
									<span className="pr-2 -mb-1">
										<Image src={item.icon} width={20} height={20} />
									</span>
								)}
								{item.name}
							</a>
						</div>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;

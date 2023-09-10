import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
	return (
		<div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
			<SectionTitle title="What people have to say about me!" />
			<div className="max-w-6xl relative m-auto py-20 flex flex-col overflow-hidden items-center gap-10 md:gap-10">
				<img
					className="sqD top-[0px] left-0 bottom-auto right-auto md:bottom-[-50px] w-20 z-[-100]"
					src="/assets/doodles/testimonials/yay.svg"
				/>
				<div className="flex items-center animate-slider gap-10">
					{testimonials.map((item, index) => {
						return (
							<div
								key={index}
								className="relative pointer-default w-[80dvw] sm:w-[25dvw] hover:scale-[1.2] duration-300 bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
							>
								<p className="text-base italic relative testimonialQuote">
									"{item.quote}"
								</p>
								<p className="mt-4 text-xs text-fun-gray">
									<b className="text-yellow-600 font-monospace">{item.name}</b> -{" "}
									{item.job}
								</p>
							</div>
						);
					})}
				</div>
				<div className="flex items-center animate-slider-opp gap-10">
					{testimonials
						.map((item, index) => {
							return (
								<div
									key={index}
									className="relative pointer-default w-[80dvw] sm:w-[25dvw] hover:scale-[1.2] duration-300 bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
								>
									<p className="text-base italic relative testimonialQuote">
										"{item.quote}"
									</p>
									<p className="mt-4 text-xs text-fun-gray">
										<b className="text-yellow-600 font-monospace">{item.name}</b> -{" "}
										{item.job}
									</p>
								</div>
							);
						})
						.reverse()}
				</div>
				<img
					className="sqD bottom-0 right-0 w-12"
					src="/assets/doodles/testimonials/squiggle2.svg"
				/>
			</div>
		</div>
	);
}

export default Testimonials;

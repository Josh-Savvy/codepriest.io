import React, { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero: FC = (): JSX.Element => {
	return (
		<>
			<div
				className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
				style={{ maxWidth: "1200px" }}
			>
				<p className="text-2xl mb-5">Hello there.</p>
				<h1 className="heroTitle min-w-[80vw] inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-5 font-bold heroShinyBg">
					I'm
					<span className="ml-5 uppercase heroShiny1 text-yellow-600 tracking-wide">
						Joshua Joseph <br /> (CodePriest)
					</span>
					<img
						className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-0"
						style={{ animationDelay: "0.1s" }}
						src="/assets/doodles/hero/html.svg"
					/>
					<img
						className="sqD hidden sm:block left-[100px] lg:left-[100px] bottom-[-250px]"
						style={{ animationDelay: "0.5s" }}
						src="/assets/doodles/hero/js.svg"
					/>
					<img
						className="sqD bottom-[-395px] right-[65%] sm:right-[40%]"
						style={{ animationDelay: "0.6s" }}
						src="/assets/doodles/hero/dino.svg"
					/>
					<img
						className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
						style={{ animationDelay: "0.7s" }}
						src="/assets/doodles/skills/laptop.svg"
					/>
					<img
						className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-120px] sm:left-[15%] lg:left-[23%]"
						src="/assets/doodles/hero/pop2.svg"
					/>
					<img
						className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:-left-20 opacity-40"
						style={{ animationDelay: "0.9s" }}
						src="/assets/doodles/hero/code.svg"
					/>
				</h1>
				<p className="text-2xl mb-16 max-w-[50%]">
					A Software Developer.
					<br />
					<span className="text-lg">I create and build digital solutions.</span>
				</p>
				<ScrollLink
					activeClass="active"
					to="learnmore"
					spy={true}
					offset={-30}
					smooth={true}
					duration={500}
				>
					<div className="cursor-pointer font-bold whitespace-nowrap duration-300 px-10 py-4 text-white border-2 hover:border-yellow-600 text-xl rounded-full border-white hover:bg-yellow-600 transition-colors">
						Explore
					</div>
				</ScrollLink>
			</div>
		</>
	);
};

export default Hero;

import React from "react";

function CTA() {
	return (
		<div className="pt-36 relative w-full overflow-hidden">
			<div className="pt-14 pb-40">
				<h2 className="text-4xl md:text-5xl font-bold mb-10">
					Interested in Working Together?
				</h2>
				<a
					href="mailto:joshdev47@gmail.com"
					className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-yellow-800 hover:bg-yellow-900 duration-300 hover:border-yellow-600 transition-colors"
				>
					Get in Touch
				</a>
			</div>
			<img
				className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-120px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
				style={{ zIndex: "-10" }}
				src="/assets/doodles/hero/fancyLines.svg"
			/>
		</div>
	);
}

export default CTA;

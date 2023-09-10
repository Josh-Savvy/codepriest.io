import { SVGAttributes } from "react";

export const CrossIcon = (props?: SVGAttributes<any>) => {
	return (
		<svg
			className="h-5 w-5 absolute text-gray-100"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			shapeRendering="geometricPrecision"
			{...props}
		>
			<path d="M18 6L6 18" />
			<path d="M6 6l12 12" />
		</svg>
	);
};

export const MenuIcon = (props?: SVGAttributes<any>) => {
	return (
		<svg
			className="h-5 w-5 absolute text-gray-100"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			{...props}
		>
			<path
				d="M2.5 7.5H17.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.5 12.5H17.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

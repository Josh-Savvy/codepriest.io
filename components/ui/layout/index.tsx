import Footer from "../../global/Footer";
import Head from "next/head";
import MobileNavbar from "../../global/MobileNavbar";
import Navbar from "../../global/Navbar";
import React, { ReactChildren } from "react";

function Layout({ currentPage, meta: { title, desc }, children }: IPageProps) {
	const pageTitle = `${
		currentPage === "Home"
			? // ? "Joshua Joseph - Software Developer [Javascript | TS | NodeJS | React | AWS]"
			  "Joshua Joseph - Software Developer"
			: `${currentPage} - codepriest.io`
	}`;
	return (
		<div
			className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
			style={{ maxWidth: "1200px" }}
		>
			<Head>
				<title>{pageTitle}</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/favicon/site.webmanifest" />
				<meta name="title" content={pageTitle} />
				<meta name="description" content={desc} />

				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://braydentw.io/" /> */}
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={desc} />
				{/* <meta
					property="og:image"
					content="https://braydentw.io/assets/misc/og.png"
				/> */}

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={pageTitle} />
				<meta property="twitter:description" content={desc} />
			</Head>
			<main className="p-5 w-full flex-1 text-center">
				<div className="hidden sm:block z-100">
					<Navbar currentPage={currentPage} />
				</div>
				<div className="-m-5 block sm:hidden z-100">
					<MobileNavbar />
				</div>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;

interface IPageProps {
	currentPage: string;
	meta: {
		title?: string;
		desc: string;
	};
	children?: JSX.Element | JSX.Element[];
}

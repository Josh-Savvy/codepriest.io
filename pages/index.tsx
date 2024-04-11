import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Layout from "@/components/ui/layout";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
	return (
		<Layout
			currentPage="Home"
			meta={{desc:"I'm a passionate web developer and designer coding beautiful websites and apps.",}}
		>
			<Hero />
			<div className="mt-20 space-y-32">
				<Projects />
				<Skills />
				<Testimonials />
				{/* <Posts allPosts={allPosts} /> */}
			</div>
			<CTA />
		</Layout>
	);
};
export default Home;

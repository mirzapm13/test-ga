import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@features/home/view"), {
	ssr: false,
});

const Home = () => {
	return (
		<>
			<NextSeo title="Homepage" />
			<HomeView />
		</>
	);
};

export default Home;

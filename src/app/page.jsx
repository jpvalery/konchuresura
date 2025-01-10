import { Author } from '@/components/Author';
import { Download } from '@/components/Download';
import { Footer } from '@/components/Footer';
import { GameComponents } from '@/components/GameComponents';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { NavBar } from '@/components/NavBar';
import { Rules } from '@/components/Rules';
import { Setup } from '@/components/Setup';
// import { Testimonials } from "@/components/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<Introduction />
			<NavBar />
			<GameComponents />
			<Setup />
			<Rules />
			<Download />
			{/* <Testimonials /> */}
			<Author />
			<Footer />
		</>
	);
}

import { Container } from '@/components/Container';

export function Introduction() {
	return (
		<section
			id="introduction"
			aria-label="Introduction"
			className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
		>
			<Container className="text-lg tracking-tight text-stone-700">
				<p className="font-display pb-8 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
					Push your opponents' insect fighters out of the ring or force them to
					use all their pieces before they can defeat you!
				</p>
				<p className="mt-4">
					In the warmth of spring, mighty insects emerge to test their strength!
					Watch as these powerful creatures use their impressive horns to push
					and shove, showing off their wrestling prowess to their amazed insect
					friends. Now you can join the fight for the control of the tree stump
					and prove your fighter's worth in the ring!
				</p>
				<p className="font-display py-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
					Battle one-on-one free-for-all, or team up for two-versus-two combat!
				</p>
			</Container>
		</section>
	);
}

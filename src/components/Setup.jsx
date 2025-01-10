import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import twoPlayersImage from '@/images/board-setup/2-players-konchu-resura.svg';
import threePlayersImage from '@/images/board-setup/3-players-konchu-resura.svg';
import fourPlayersImage from '@/images/board-setup/4-players-konchu-resura.svg';

const generalSetup = [
	{
		title: 'Prepare the game',
		description:
			'Place the Battle Board in the center of the table as well as the Pusher.',
	},
	{
		title: 'Distribute Tokens',
		description:
			'Each Player will have 1 Medium Tokens and 2 Small Tokens in their inventory.',
	},
	{
		title: 'Set up the Battle Board',
		description: 'Place all tokens as indicated in the next images.',
	},
	{
		title: '2 Players',
		description:
			"You'll need 3 Large Tokens, 8 Medium Tokens, and 14 Small Tokens.",
		image: twoPlayersImage,
	},
	{
		title: '3 Players',
		description:
			"You'll need 3 Large Tokens, 10 Medium Tokens, and 12 Small Tokens.",
		image: threePlayersImage,
	},
	{
		title: '4 Players',
		description:
			"You'll need 3 Large Tokens, 6 Medium Tokens, and 14 Small Tokens.",
		image: fourPlayersImage,
	},
];

export function Setup() {
	return (
		<section
			id="setup"
			aria-labelledby="setup-title"
			className="scroll-mt-14 bg-emerald-800 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
		>
			<Container size="lg" className="mt-16">
				<SectionHeading number="2" id="setup-title" dark>
					Setup
				</SectionHeading>
				<ol role="list" className="grid grid-cols-1 gap-2 py-12">
					{generalSetup.slice(0, 3).map((step, index) => (
						<li key={step.title} className="grid grid-flow-row gap-0.5">
							<div className="grid grid-flow-col items-center justify-start gap-2">
								<span className="font-mono text-base text-stone-300">
									{index + 1}
								</span>
								<h3 className="text-lg font-medium tracking-tight text-stone-50">
									{step.title}
								</h3>
							</div>
							<p className="text-base text-stone-100">{step.description}</p>
						</li>
					))}
				</ol>
			</Container>
			<Container size="lg" className="">
				<ol
					role="list"
					className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
				>
					{generalSetup.slice(3, 6).map((step) => (
						<li key={step.title} className="[counter-increment:video]">
							<div
								className="relative flex h-60 items-center justify-center rounded-2xl px-6 shadow-lg"
								style={{
									backgroundImage:
										//"linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
										'linear-gradient(to top, #c79081 0%, #dfa579 100%)',
								}}
							>
								<div className="flex h-60 rounded">
									<Image src={step.image} alt="" unoptimized />
								</div>
							</div>
							<h3 className="mt-6 text-center text-base font-medium tracking-tight text-stone-50">
								{step.title}
							</h3>
							<p className="mt-2 text-center text-sm text-stone-100">
								{step.description}
							</p>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}

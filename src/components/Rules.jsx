import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import emptyIcon from '@/images/icons/empty.svg';
import koIcon from '@/images/icons/ko.svg';
import fallImage from '@/images/rules/fall.svg';
import pushImage from '@/images/rules/push.svg';
import winImage from '@/images/rules/win.svg';

const rules = [
	{
		title: 'Push a token onto the board',
		description:
			'Push one piece from your inventory onto the board in a straight line.',
		tip: 'You can push in any direction—get creative with your angles for more strategic options!',
		image: function pushImg() {
			return (
				<div className="absolute inset-0 flex items-center justify-center bg-linear-to-l from-red-400 to-orange-500">
					<Image src={pushImage} alt="" unoptimized />
				</div>
			);
		},
	},
	{
		title: 'Collect new ones',
		description:
			'Collect any standard tokens that fall out of the ring-3 due to your push - they go into your inventory',
		tip: 'If pieces accidentally fall out (not from a push), return them to the supply.',
		image: function fallImg() {
			return (
				<div className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-orange-300 to-rose-300">
					<Image src={fallImage} alt="" unoptimized />
				</div>
			);
		},
	},
	{
		title: 'Be the last one standing!',
		description:
			"Go on the offense or play defensively—but make sure you're the last one standing on the board.",
		image: function winImg() {
			return (
				<div className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-rose-700 to-pink-600">
					<Image src={winImage} alt="" unoptimized />
				</div>
			);
		},
	},
];

const victoryConditions = [
	{
		title: 'Victory by Knockout',
		description: [
			`First player/team to push an opponent's fighter out of the ring-3 wins instantly`,
			`If you knock out your own fighter (even while knocking out others), you lose`,
			`In a three-player game, knocking out any opponent ends the game immediately`,
		],
		image: function VictoryImageBG() {
			return (
				<div className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-amber-200 to-yellow-400">
					<Image src={koIcon} alt="" unoptimized className="h-32" />
				</div>
			);
		},
	},
	{
		title: 'Victory by Depletion',
		description: [
			`In 2 or 4 player games: If a player/team runs out of pieces and cannot take their turn, their opponent wins`,
			`In 3 player games: Players who run out of pieces are eliminated, but their fighter remains in play as an obstacle`,
		],
		image: function FigmaImage() {
			return (
				<div className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-orange-600 to-orange-500">
					<Image src={emptyIcon} alt="" unoptimized className="h-32" />
				</div>
			);
		},
	},
];

export function Rules() {
	return (
		<section
			id="rules"
			aria-labelledby="rules-title"
			className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
		>
			<Container>
				<SectionHeading number="3" id="rules-title">
					Rules
				</SectionHeading>
				<p className="mt-4 text-lg tracking-tight text-stone-700">
					Konchu Resura is extremely simple to play and is ideal for players of
					all ages. Learn to play in 30 seconds.
				</p>
			</Container>
			<Container size="lg">
				<p className="font-display py-8 text-center text-4xl font-bold tracking-tight text-stone-900">
					On your turn
				</p>
				<ol
					role="list"
					className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-stone-400/20"
				>
					{rules.map((rule) => (
						<li
							key={rule.title}
							className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
						>
							<div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
								<rule.image />
							</div>
							<div>
								<h3 className="text-base font-medium tracking-tight text-stone-900">
									{rule.title}
								</h3>
								<p className="py-2 text-stone-700">{rule.description}</p>
								{rule.tip && (
									<p className="rounded-lg bg-stone-100 p-2 text-sm text-stone-600">
										{rule.tip}
									</p>
								)}
							</div>
						</li>
					))}
				</ol>
			</Container>
			<Container size="lg" className="mt-16">
				<p className="font-display py-8 text-center text-4xl font-bold tracking-tight text-stone-900">
					Victory Conditions
				</p>

				<ol
					role="list"
					className="grid grid-cols-1 justify-evenly gap-y-10 lg:grid-cols-2 lg:text-center xl:divide-x xl:divide-stone-400/20"
				>
					{victoryConditions.map((condition) => (
						<li
							key={condition.title}
							className="grid auto-rows-min grid-cols-1 items-center gap-8 px-4 md:px-32"
						>
							<div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
								<condition.image />
							</div>
							<div>
								<h3 className="text-base font-medium tracking-tight text-stone-900">
									{condition.title}
								</h3>
								<ul className="space-y-1 py-2 text-sm text-stone-700">
									{condition.description.map((i, index) => (
										<li key={index}>{i}</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}

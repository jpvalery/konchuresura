import { Container } from '@/components/Container';
import {
	Expandable,
	ExpandableButton,
	ExpandableItems,
} from '@/components/Expandable';
import { SectionHeading } from '@/components/SectionHeading';

const tableOfContents = {
	Battlefield: {
		'Base Board': 1,
		'Base Board Cover': 1,
		'Token Pusher Board': 1,
	},
	Tokens: {
		'Small Tokens': 17,
		'Medium Tokens': 15,
		'Large Tokens': 5,
	},
	Fighters: {
		'Red Beetle': 1,
		'Blue Beetle': 1,
		'Purple Beetle': 1,
		'Yellow Beetle': 1,
	},
};

export function GameComponents() {
	return (
		<section
			id="components"
			aria-labelledby="components-title"
			className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
		>
			<Container>
				<SectionHeading number="1" id="components-title">
					Components
				</SectionHeading>
				<p className="mt-4 text-lg tracking-tight text-stone-700">
					Everything you need is included in our comprehensive .3MF file.
				</p>
				<p className="mt-4 text-lg tracking-tight text-stone-700">
					Konchu Resura is designed so that all game components can fit within a
					single box—which happens to be the board for the game. No need to
					print inserts or find a cardboard box!
				</p>
				<Expandable>
					<ol role="list" className="mt-16 space-y-10 sm:space-y-16">
						<ExpandableItems>
							{Object.entries(tableOfContents).map(([title, pages]) => (
								<li key={title}>
									<h3 className="font-display text-4xl font-bold tracking-tight text-stone-900">
										{title}
									</h3>
									<ol
										role="list"
										className="mt-4 divide-y divide-stone-300/30 rounded-2xl bg-stone-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
									>
										{Object.entries(pages).map(([title, pageNumber]) => (
											<li
												key={title}
												className="flex justify-between py-3"
												aria-label={`${title} on page ${pageNumber}`}
											>
												<span
													className="font-medium text-stone-900"
													aria-hidden="true"
												>
													{title}
												</span>
												<span
													className="font-mono text-stone-400"
													aria-hidden="true"
												>
													x {pageNumber}
												</span>
											</li>
										))}
									</ol>
								</li>
							))}
						</ExpandableItems>
					</ol>
					<ExpandableButton>See more</ExpandableButton>
				</Expandable>
			</Container>
		</section>
	);
}

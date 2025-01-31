import Image from 'next/image';

import { Button } from '@/components/Button';
import { StarRating } from '@/components/StarRating';
import StlViewer from '@/components/StlViewer';

import coverImage from '@/images/cover.jpg';

function Testimonial() {
	return (
		<figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
			<div className="flex justify-center text-emerald-800 lg:justify-start">
				<StarRating />
			</div>
			<blockquote className="mt-2">
				<p className="font-sans text-xl font-medium text-stone-900">
					“This game is so easy to print and play. We love playing it and all my
					friends want me to print one for them!”
				</p>
			</blockquote>
			<figcaption className="mt-2 text-sm text-stone-500">
				<strong className="font-semibold text-emerald-800 before:content-['—_']">
					Charles D.
				</strong>
				, early tester
			</figcaption>
		</figure>
	);
}

export function Hero() {
	return (
		<header className="overflow-hidden bg-stone-100 lg:bg-transparent lg:px-5">
			<div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pt-20 lg:pb-36 xl:py-32">
				<div className="relative flex items-end lg:col-span-5 lg:row-span-2">
					<div className="rounded-br-6xl bg-hero-pattern absolute -top-20 right-1/2 -bottom-12 left-0 z-10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-72"></div>
					<div className="relative z-10 mx-auto flex w-64 rounded-full md:w-80 lg:w-auto">
						<div className="hidden lg:flex">
							{/* Header with STL 3D*/}
							<StlViewer stlPath={'/stl/Beetle.stl'} />
						</div>
						<div className="flex lg:hidden">
							{/* Header with cover image for smaller screens*/}
							<Image
								className="rounded-full"
								src={coverImage}
								alt=""
								priority
							/>
						</div>
					</div>
				</div>
				<div className="relative flex px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
					<div className="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-stone-100" />
					<Testimonial />
				</div>
				<div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
					<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
						<h1 className="font-display text-7xl font-black text-stone-900">
							Konchu Resura
						</h1>
						<p className="mt-4 text-3xl text-stone-600">
							A free and open-source game that is ready and easy to print. Be
							the last bug standing!
						</p>
						<div className="mt-8 flex gap-4">
							<Button href="#components" color="emerald">
								Learn more
							</Button>
							<Button href="#download" variant="outline" color="emerald">
								3D Print now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

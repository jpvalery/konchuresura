import Link from 'next/link';

import { Container } from '@/components/Container';

export default function NotFound() {
	return (
		<div className="relative flex flex-auto items-center">
			<div className="rounded-br-6xl bg-hero-pattern absolute -top-20 right-1/2 -bottom-12 left-0 z-10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-72"></div>
			<Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
				<p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-stone-900 ring-1 ring-stone-900 ring-inset">
					404
				</p>
				<h1 className="font-display mt-6 text-5xl font-extrabold text-stone-900 sm:text-6xl">
					Page not found
				</h1>
				<p className="mt-4 text-lg tracking-tight text-stone-700">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<Link
					href="/"
					className="mt-6 text-base font-medium text-emerald-800 hover:text-emerald-800"
				>
					Go back home <span aria-hidden="true">&rarr;</span>
				</Link>
			</Container>
		</div>
	);
}

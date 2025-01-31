const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<footer className="relative pt-5 pb-20 sm:pt-14 sm:pb-32">
			<div className="relative text-center text-sm text-stone-600">
				<p>© {currentYear} All rights reserved.</p>
				<p>
					Konchu Resura is offered under{' '}
					<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
						Creative Commons CC BY-NC-SA
					</a>
					.
				</p>
				<p>
					Website by <a href="https://raccoonv.com">Raccoon Ventures, Inc.</a>
				</p>
				<p className="pt-2 text-xs italic">
					Any resemblance to existing games featuring battling insects engaging
					in circular arena combat is purely coincidental. No actual insects
					were harmed in the making of this game.
				</p>
			</div>
		</footer>
	);
}

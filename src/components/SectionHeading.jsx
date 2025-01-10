import clsx from 'clsx';

export function SectionHeading({
	number,
	children,
	className,
	dark = false,
	...props
}) {
	return (
		<h2
			className={clsx(
				className,
				'inline-flex items-center rounded-full px-5 py-2',
				dark
					? 'text-emerald-50 ring-1 ring-inset ring-emerald-50'
					: 'text-emerald-800 ring-1 ring-inset ring-emerald-800',
			)}
			{...props}
		>
			<span className="font-mono text-base" aria-hidden="true">
				{number.padStart(2, '0')}
			</span>
			<span
				className={clsx(
					'ml-3 h-3.5 w-px',
					dark ? 'bg-emerald-50/20' : 'bg-emerald-800/20',
				)}
			/>
			<span className="ml-3 text-lg font-medium tracking-tight">
				{children}
			</span>
		</h2>
	);
}

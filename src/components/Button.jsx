import clsx from 'clsx';
import Link from 'next/link';

const baseStyles = {
	solid:
		'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
	outline:
		'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
};

const variantStyles = {
	solid: {
		slate:
			'bg-stone-900 text-white hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:bg-stone-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-stone-900',
		emerald:
			'bg-emerald-800 text-white hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:bg-emerald-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-emerald-800',
		white:
			'bg-white text-emerald-800 hover:text-emerald-700 focus-visible:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-emerald-50 active:text-emerald-900/80 disabled:opacity-40 disabled:hover:text-emerald-800',
	},
	outline: {
		slate:
			'border-stone-200 text-stone-900 hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 active:border-stone-200 active:bg-stone-50 active:text-stone-900/70 disabled:opacity-40 disabled:hover:border-stone-200 disabled:hover:bg-transparent',
		emerald:
			'border-emerald-300 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:text-emerald-800/70 disabled:opacity-40 disabled:hover:border-emerald-300 disabled:hover:bg-transparent',
	},
};

export function Button({ className, ...props }) {
	props.variant ??= 'solid';
	props.color ??= 'slate';

	className = clsx(
		baseStyles[props.variant],
		props.variant === 'outline'
			? variantStyles.outline[props.color]
			: props.variant === 'solid'
				? variantStyles.solid[props.color]
				: undefined,
		className,
	);

	return typeof props.href === 'undefined' ? (
		<button className={className} {...props} />
	) : (
		<Link className={className} {...props} />
	);
}

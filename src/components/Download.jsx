import Image from 'next/image';

import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';

import overviewImage from '@/images/konchu-resura-print-overview.png';

function MakerWorldIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="98"
			height="28"
			fill="none"
			viewBox="0 0 98 28"
			{...props}
		>
			<g fill="currentColor" clipPath="url(#clip0_15857_70398)">
				<path d="m61.508 20.18.04-.005h-.033zM59.72 22.172c0-.05 0-.1.009-.15v.01a2 2 0 0 0-.008.14M77.325 6.874l.041-.006h-.033zM75.538 8.865c0-.05 0-.1.008-.15v.01a2 2 0 0 0-.008.14M46.435 22.824l-2.107-6.57h-2.076l-2.11 6.574-2.05-7.183H36l2.855 10.54h2.004l2.428-6.9 2.458 6.9h1.975l2.855-10.54h-2.088zM67.248 26.201h2.042V15.645h-2.042zM54.824 18.189c-.82 0-1.62.238-2.301.686a4.1 4.1 0 0 0-1.526 1.827 4 4 0 0 0-.235 2.353c.16.79.554 1.515 1.133 2.085.58.569 1.317.957 2.12 1.114a4.2 4.2 0 0 0 2.393-.232 4.13 4.13 0 0 0 1.859-1.5c.455-.67.698-1.456.698-2.262 0-1.08-.436-2.115-1.213-2.879a4.18 4.18 0 0 0-2.928-1.192m0 6.355c-.46 0-.91-.133-1.292-.383a2.3 2.3 0 0 1-.857-1.024 2.25 2.25 0 0 1-.134-1.32c.09-.443.31-.85.635-1.17s.739-.538 1.19-.626a2.36 2.36 0 0 1 1.342.129c.425.173.788.465 1.043.841a2.26 2.26 0 0 1-.286 2.885 2.35 2.35 0 0 1-1.641.673zM77.36 15.645v3.277a4.2 4.2 0 0 0-4.286-.272 4.1 4.1 0 0 0-1.627 1.5 4.02 4.02 0 0 0 0 4.222 4.1 4.1 0 0 0 1.626 1.499 4.2 4.2 0 0 0 4.286-.272v.61h2.042V15.644zm-2.367 8.904c-.46 0-.909-.133-1.29-.384a2.3 2.3 0 0 1-.857-1.025 2.25 2.25 0 0 1-.133-1.32c.09-.443.31-.85.636-1.17a2.36 2.36 0 0 1 2.532-.496c.424.174.787.467 1.042.842.255.376.392.818.392 1.27 0 .605-.246 1.185-.681 1.613a2.35 2.35 0 0 1-1.641.67"></path>
				<path d="M62.772 22.593c0-.066 0-.09.009-.157a2.1 2.1 0 0 1 .587-1.294c.34-.352.794-.58 1.284-.643h.065a2 2 0 0 1 .202-.01h.132c.066 0 .13.009.195.018l.12.018v-2.16a4 4 0 0 0-2.597 1.047v-.785h-2.036v7.558h2.042V22.66zM55.95 11.645v.59h1.819V4.373H55.95v.546a4.2 4.2 0 0 0-4.267-.234 4.1 4.1 0 0 0-1.611 1.498 4.02 4.02 0 0 0 0 4.202 4.1 4.1 0 0 0 1.611 1.499 4.2 4.2 0 0 0 4.267-.234zm-4.654-3.363c0-.452.136-.894.391-1.27a2.3 2.3 0 0 1 1.043-.841 2.36 2.36 0 0 1 1.342-.13c.45.088.865.305 1.19.625s.546.726.635 1.17c.09.443.044.902-.132 1.32a2.3 2.3 0 0 1-.856 1.024 2.35 2.35 0 0 1-2.932-.285 2.27 2.27 0 0 1-.68-1.613M38.06 5.463 41.16 11.6h1.393l3.1-6.137v6.746h2.06V1.67h-2.199l-3.657 6.898-3.659-6.899H36V12.21h2.06zM67.19 4.37h-2.462l-2.825 3.57V1.668h-2.04V12.23h2.04V8.142l2.915 4.087h2.462l-3.013-4.185zM79.406 8.599a2.11 2.11 0 0 1 .596-1.451c.34-.352.793-.58 1.283-.643h.065q.102-.01.203-.01h.132c.065 0 .13.01.195.02l.12.016v-2.16a4.02 4.02 0 0 0-2.603 1.046v-.784h-2.03v7.596h2.042v-3.63zM71.732 10.565a2.35 2.35 0 0 1-1.396-.461 2.3 2.3 0 0 1-.835-1.193h6.317q.053-.312.055-.63c0-1.008-.38-1.98-1.067-2.73a4.195 4.195 0 0 0-5.524-.557 4.07 4.07 0 0 0-1.608 2.46 4.01 4.01 0 0 0 .484 2.887 4.13 4.13 0 0 0 2.326 1.823 4.2 4.2 0 0 0 2.97-.18 4.1 4.1 0 0 0 2.08-2.091h-2.162a2.355 2.355 0 0 1-1.64.672m0-4.567c.459 0 .907.135 1.29.385.38.25.679.607.855 1.024h-4.29c.177-.417.474-.773.856-1.024.381-.25.83-.384 1.289-.385M27.287 2.681 20.849.161 20.44 0l-.413.16-6.028 2.359L7.97.16 7.56 0l-.41.16L.714 2.682 0 2.961v22.08l.713.278 6.439 2.52.41.161.409-.16L14 25.48l6.028 2.358.41.161.411-.16 6.438-2.521.713-.279V2.961zm-6.848-1.477 6.438 2.522v9.11l-6.438-2.52zm-6.03 12.675 6.03-2.358 6.029 2.358.307.12-.307.12-6.03 2.358-6.028-2.358-.308-.12zM7.562 1.204 14 3.726v9.11l-6.439-2.521zM1.533 13.879l6.028-2.358 6.03 2.358.307.12-.307.12-6.03 2.358-6.028-2.358-.307-.12zm-.408 10.394V15.16l6.439 2.52v9.11zm12.877 0V15.16l6.439 2.52v9.11z"></path>
			</g>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M86 0v28h12V0zm2.25 22.207v2.155h7.399V21.77q0-.786-.253-1.355a2 2 0 0 0-.74-.881q-.48-.308-1.153-.308-.582 0-.931.17-.354.167-.537.446a1.8 1.8 0 0 0-.263.625h-.05a1.16 1.16 0 0 0-.284-.578 1.4 1.4 0 0 0-.556-.36 2.1 2.1 0 0 0-.76-.128q-1.042 0-1.457.71-.415.712-.415 2.095m2.93-.166v.852h-1.645v-.772q0-.63.188-.919.182-.294.607-.293.42 0 .638.246.212.247.212.886m3.173.852h-1.928v-.91q0-.468.117-.733a.76.76 0 0 1 .323-.384 1 1 0 0 1 .481-.114q.46 0 .734.26.273.261.273.924zm-4.165-8.384q-.303.53-.303 1.265 0 .748.334 1.312.329.564.992.881.657.312 1.65.313.975 0 1.619-.346.642-.35.956-.962.314-.615.314-1.411 0-.612-.096-1.038a3.3 3.3 0 0 0-.304-.824h-1.194q.222.446.334.867.111.421.111.928 0 .612-.37.957-.373.342-1.026.365V13.4h-.75q-.825 0-1.396.289a2 2 0 0 0-.87.82m1.083 1.956a.94.94 0 0 1-.288-.7q0-.341.157-.56a.94.94 0 0 1 .425-.331q.268-.114.612-.119v2.028q-.617-.043-.906-.318m3.25-6.47q0-.237-.051-.46a4 4 0 0 0-.127-.45h1.149q.111.233.182.578.075.341.076.749 0 .473-.162.852-.167.374-.572.593-.41.213-1.139.213H91.15v.691h-.653l-.516-.796-1.195-.416v-.924h1.205V9.142h1.159v1.483h2.727q.325 0 .486-.17a.66.66 0 0 0 .157-.46m-4.15-5.789q-.496.57-.496 1.635 0 .558.136 1.084.136.522.375.943l1.042-.478a6 6 0 0 1-.293-.74 2.5 2.5 0 0 1-.117-.752q0-.39.208-.607.207-.218.653-.218h.247l.03.92q.046 1.183.477 1.776.424.591 1.326.592.612 0 1.012-.213a1.4 1.4 0 0 0 .587-.583q.192-.374.192-.843 0-.44-.091-.749a1.6 1.6 0 0 0-.284-.544 2.8 2.8 0 0 0-.495-.465v-.038l.769-.279V3.638h-3.77q-1.013 0-1.509.568m2.677 1.426-.02-.559h.465q.541 0 .835.322.293.318.293.782a.82.82 0 0 1-.146.507q-.152.195-.506.194a.84.84 0 0 1-.653-.27q-.249-.274-.268-.976"
				clipRule="evenodd"
			></path>
			<defs>
				<clipPath id="clip0_15857_70398">
					<path fill="currentColor" d="M0 0h82v28H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
}

function ThangsIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="73"
			height="24"
			shapeRendering="geometricPrecision"
			viewBox="0 0 73 24"
			{...props}
		>
			<defs>
				<path id="a" d="M0 .541h46.39v23.065H0z"></path>
				<path id="c" d="M.394.541h23.065v23.065H.394z"></path>
			</defs>
			<g fill="none" fillRule="evenodd">
				<mask id="b" fill="#fff">
					<use xlinkHref="#a"></use>
				</mask>
				<path
					//fill="#7B7B82"
					fill="currentColor"
					d="M34.793 17.816c-3.19 0-5.775-2.57-5.775-5.743 0-3.17 2.586-5.741 5.775-5.741s5.774 2.57 5.774 5.741c0 3.172-2.585 5.743-5.774 5.743m-23.195 0c-3.19 0-5.775-2.57-5.775-5.743 0-3.17 2.585-5.741 5.775-5.741 3.189 0 5.774 2.57 5.774 5.741 0 3.172-2.585 5.743-5.774 5.743m34.76-6.362q-.001-.048-.005-.097a11 11 0 0 0-.123-1.116q-.005-.028-.009-.057a11 11 0 0 0-.246-1.128v-.002A11.58 11.58 0 0 0 34.792.54H11.597C5.78.54.975 4.808.142 10.364l-.003.024q-.079.532-.107 1.078-.003.029-.006.058v.05c-.007.166-.025.33-.025.5 0 .209.02.413.032.62l.004.096q.036.566.124 1.117l.009.055c.908 5.469 5.672 9.644 11.429 9.644H46.39V12.074c0-.21-.02-.414-.031-.62"
					mask="url(#b)"
				></path>
				<g transform="translate(49)">
					<mask id="d" fill="#fff">
						<use xlinkHref="#c"></use>
					</mask>
					<path
						//fill="#1DA1F2"
						fill="currentColor"
						d="M11.927 17.816a5.742 5.742 0 1 1 0-11.485 5.742 5.742 0 0 1 0 11.485m0-17.275C5.557.54.394 5.704.394 12.073v11.533h11.533c6.369 0 11.532-5.163 11.532-11.532C23.46 5.703 18.296.54 11.927.54"
						mask="url(#d)"
					></path>
				</g>
			</g>
		</svg>
	);
}

function PrintablesIcon(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" {...props}>
			<path d="m0 35 12.172-7L0 21ZM12.172 0 0 7l12.172 7v14l12.172-7V7Z"></path>
		</svg>
	);
}

export function Download() {
	return (
		<section
			id="download"
			aria-labelledby="download-title"
			className="scroll-mt-14 bg-emerald-800 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
		>
			<Container>
				<SectionHeading number="4" id="download-title" dark>
					Download
				</SectionHeading>
				<p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-balance text-stone-50 sm:text-6xl">
					Free to download, print, and play
				</p>
			</Container>
			<div className="mx-auto mt-16 max-w-5xl lg:px-6">
				<div className="md:rounded-6xl grid items-center gap-8 bg-stone-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:px-8 md:pt-16 lg:p-12">
					<Image
						src={overviewImage}
						alt="Overview of the whole print"
						className="rounded-lg"
					/>
					<div>
						<p className="mt-4 max-w-xl text-lg tracking-tight text-stone-600">
							Konchu Resura is available to download for free on MakerWorld,
							Thangs, and Printables. We offer a comprehensive .3MF file with
							everything you need to get started.
						</p>
						<p className="my-4 max-w-xl text-lg tracking-tight text-stone-600">
							Just slice and start your print!
						</p>
						<div className="grid w-max auto-cols-min grid-cols-1 items-center justify-evenly gap-x-2 gap-y-4 md:grid-cols-2">
							<Link
								href="https://makerworld.com/en/models/976691#profileId-949677"
								className="inline-flex justify-center rounded-md bg-emerald-800 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-emerald-500 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:bg-emerald-700 active:text-white/80"
							>
								Download now on MakerWorld
							</Link>
							<span className="-ml-1 hidden items-center md:inline-flex">
								<MakerWorldIcon className="h-5 fill-current" />
							</span>

							<Link
								href="https://thangs.com/designer/jpvalery/3d-model/1242381"
								className="inline-flex justify-center rounded-md bg-emerald-800 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-emerald-500 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:bg-emerald-700 active:text-white/80"
							>
								Download now on Thangs
							</Link>
							<span className="pl hidden items-center md:inline-flex">
								<ThangsIcon className="h-5 fill-current" />
							</span>

							<Link
								href="https://www.printables.com/model/1142998-konchu-resura-be-the-last-bug-standing"
								className="inline-flex justify-center rounded-md bg-emerald-800 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-emerald-500 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:bg-emerald-700 active:text-white/80"
							>
								Download now on Printables
							</Link>
							<span className="hidden items-center pl-2 md:inline-flex">
								<PrintablesIcon className="h-10 fill-current" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Navbar() {
	return (
		<section className="relative w-full px-8 text-gray-700 bg-white body-font">
			<div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
				<a href="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
					&lt; GoCode /&gt;
				</a>

				<nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
					<a
						href="https://valerisabev.com"
						target="_BLANK"
						className="relative font-medium leading-6 text-gray-600 hover:text-gray-900"
					>
						<span className="block">About the Developer</span>
					</a>
				</nav>

				<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
					<span className="inline-flex rounded-md shadow-sm">
						<a
							href="/my-snippets"
							className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap border border-slate-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							My Snippets
						</a>
					</span>
				</div>
			</div>
		</section>
	);
}

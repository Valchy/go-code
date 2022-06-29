export default function Navbar() {
	return (
		<section className="relative w-full px-8 text-gray-700 bg-white body-font">
			<div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
				<a href="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
					&lt; GoCode /&gt;
				</a>

				<form action="/snippets/search" method="POST">
					<input className="rounded-xl px-4 py-2 border text-center" placeholder="Search for a snippet" />
				</form>

				<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
					<span className="inline-flex rounded-md shadow-sm">
						<a
							href="/snippets/my"
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

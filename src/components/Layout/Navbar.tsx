import { useState } from 'react';

export default function Navbar() {
	const [search, setSearch] = useState('');

	return (
		<section className="relative w-full px-4 sm:px-8 text-gray-700 bg-white body-font">
			<div className="container flex items-center justify-between py-5 mx-auto max-w-7xl mb-10 sm:mb-0">
				<a href="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
					&lt; GoCode /&gt;
				</a>
				<input
					value={search}
					onChange={({ target }) => setSearch(target.value)}
					onKeyDown={e => {
						if (e.keyCode == 13) window.location.href = `/snippets/search?q=${encodeURIComponent(search)}`;
					}}
					className="rounded-xl px-4 py-2 border text-center absolute top-20 sm:top-0 sm:relative sm:left-0 left-1/2 transform -translate-x-1/2 sm:translate-x-0"
					placeholder="Search for a snippet"
				/>
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

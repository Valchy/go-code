import React from 'react';

interface ButtonProps {
	handler?: (a: any) => void;
	text: string;
}

export default function PrimaryButton({ handler, text }: ButtonProps) {
	return (
		<button
			onClick={handler}
			className="mt-5 mx-3 flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 md:w-auto"
		>
			{text}
		</button>
	);
}

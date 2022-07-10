import React from 'react';

interface ButtonProps {
	handler?: (a: any) => void;
	text: string;
}

export default function PrimaryButton({ handler, text }: ButtonProps) {
	return (
		<button
			onClick={handler}
			className="mt-5 mx-3 flex items-center px-6 py-3 mb-3 text-center text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 w-auto"
		>
			{text}
		</button>
	);
}

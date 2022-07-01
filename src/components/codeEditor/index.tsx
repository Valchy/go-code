import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

const CodeEditor = () => {
	const [selectedLanguage, setSelectedLangugae] = useState('javascript');
	const [editorCode, setEditorCode] = useState('');

	const handleCreate = () => {
		axios.post('/api/snippets/create', {
			data: editorCode
		});
	};

	return (
		<div className="container mt-5 flex flex-col items-center">
			<Editor
				height="50vh"
				defaultLanguage="javascript"
				language={selectedLanguage}
				defaultValue="// Your code here..."
				value={editorCode}
				theme="vs-dark"
				onChange={value => setEditorCode(value as string)}
			/>
			<button
				onClick={handleCreate}
				className="mt-5 flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 md:w-auto"
			>
				Create Snippet
			</button>
		</div>
	);
};

export default CodeEditor;

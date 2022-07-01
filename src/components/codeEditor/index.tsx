import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import PrimaryButton from '@components/buttons/Primary';
import axios from 'axios';

const CodeEditor = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('javascript');
	const [editorCode, setEditorCode] = useState('');

	const handleCreate = () => {
		axios
			.post('/api/snippets/create', {
				data: {
					code_snippet: editorCode,
					code_language: selectedLanguage
				}
			})
			.then(({ data }) => {
				if (data.success) window.location.href = `/snippets/${data.id}`;
			});
	};

	return (
		<div className="container flex flex-col items-center">
			<select className="mb-4" onChange={({ target }) => setSelectedLanguage(target.value)}>
				{['javascript', 'typescript', 'python', 'css', 'html'].map(lang => (
					<option key={lang} value={lang}>
						{lang}
					</option>
				))}
			</select>
			<Editor
				height="50vh"
				defaultLanguage="javascript"
				language={selectedLanguage}
				defaultValue="// Your code here..."
				value={editorCode}
				theme="vs-dark"
				onChange={value => setEditorCode(value as string)}
			/>
			<PrimaryButton handler={handleCreate} text="Create Snippet" />
		</div>
	);
};

export default CodeEditor;

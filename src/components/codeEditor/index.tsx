import { useState } from 'react';
import Editor from '@monaco-editor/react';
import PrimaryButton from '@components/buttons/Primary';

const CodeEditor = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('javascript');
	const [editorCode, setEditorCode] = useState('');
	const [snippetTitle, setSnippetTitle] = useState('');
	const [isPrivate, setIsPrivate] = useState('yes');

	const handleCreate = () => {
		fetch('/api/snippets/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code_snippet: editorCode,
				code_language: selectedLanguage,
				snippet_title: snippetTitle,
				is_private: isPrivate
			})
		})
			.then(res => res.json())
			.then(({ success, id }) => {
				if (success) window.location.href = `/snippets/${id}`;
			});
	};

	return (
		<div className="container flex flex-col items-center mt-7 w-screen md:w-[50vw] h-[30vh] min-h-[400px] max-w-[620px]">
			<select className="my-4" onChange={({ target }) => setSelectedLanguage(target.value)}>
				{['javascript', 'typescript', 'python', 'java', 'cpp', 'css', 'html'].map(lang => (
					<option key={lang} value={lang}>
						{lang}
					</option>
				))}
			</select>
			<input
				value={snippetTitle}
				onChange={({ target }) => setSnippetTitle(target.value)}
				placeholder="Snippet title"
				className="mb-4 border px-3 py-2 rounded-xl text-center"
			/>
			<div className="flex gap-3 mb-3">
				Private: <input type="radio" name="isPrivate" checked={isPrivate === 'yes'} onChange={() => setIsPrivate('yes')} />
				Public: <input type="radio" name="isPrivate" checked={isPrivate === 'no'} onChange={() => setIsPrivate('no')} />
			</div>
			<Editor
				width={'100%'}
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

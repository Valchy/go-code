import { CopyBlock, vs2015 } from 'react-code-blocks';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Snippets {
	snippets: SnippetType[];
}

type SnippetType = {
	author: string;
	code_snippet: string;
	code_language: string;
	_id: string;
};

export default function Snippets({ snippets = [] }: Snippets) {
	// Show react skeleton loader if no snippets
	if (snippets.length === 0)
		return (
			<div>
				<Skeleton width={300} />
				<Skeleton width={300} />
				<Skeleton width={300} />
				<br />
				<Skeleton width={300} />
			</div>
		);
	else
		return snippets.map(({ author, code_snippet, code_language, _id }) => (
			<div key={_id} className="mb-3">
				<CopyBlock text={code_snippet} language={code_language} showLineNumbers={10} theme={vs2015} codeBlock />
				<span className="mt-3">Code Snippet by: {author}</span>
			</div>
		));
}

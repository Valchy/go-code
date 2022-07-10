import { CopyBlock, vs2015 } from 'react-code-blocks';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { SnippetType } from '@components/snippet/types';

interface Snippets {
	snippets: SnippetType[];
	isLoading?: boolean;
	showOne?: boolean;
}

export default function Snippets({ snippets = [], isLoading = true, showOne }: Snippets) {
	if (!isLoading && snippets.length === 0) return <span>No snippets founds...</span>;

	return (
		<>
			{snippets.length === 0 && isLoading
				? new Array(3).fill(null).map((e, index) => (
						<div className="mx-3" key={`skeleton-${index}`}>
							<Skeleton width={300} style={{ marginBottom: '15px' }} />
							<Skeleton width={300} />
							<Skeleton width={300} />
							<Skeleton width={300} />
							<br />
							<Skeleton width={300} />
						</div>
				  ))
				: snippets.map(({ author, code_snippet, code_language, snippet_title, _id }) => (
						<div key={_id} className="mx-3">
							<span className="mb-1 block text-center">{snippet_title}</span>
							<CopyBlock text={code_snippet} language={code_language} showLineNumbers={10} theme={vs2015} codeBlock />
							<span className="mt-3 block">Code Snippet by: {author}</span>
						</div>
				  ))}
		</>
	);
}

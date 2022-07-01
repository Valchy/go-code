import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Snippets({ snippets = [] }) {
	return (
		<>
			<Skeleton />
			<Skeleton circle baseColor="#343434" width={200} height={200} highlightColor="#efefef" />
		</>
	);
}

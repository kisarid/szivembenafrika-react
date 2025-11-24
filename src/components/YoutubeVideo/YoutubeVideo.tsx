import './YoutubeVideo.scss';

export default function YoutubeVideo({ url }: { url: string }) {
	return (
		<div className='yt-embed-container'>
			<iframe
				src={url}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
		</div>
	);
}

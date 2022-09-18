export default function VideoContainer(props) {
	const { src } = props;

	return (
		<div className='video-container-component'>
			<iframe
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				frameBorder='0'
				src={src}
				title='Video'
			/>
		</div>
	)
}

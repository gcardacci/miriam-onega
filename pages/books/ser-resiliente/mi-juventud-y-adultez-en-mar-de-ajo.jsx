import VideoContainer from '../../components/VideoContainer.jsx';
import Image from 'next/image';

export default function MiJuventudYAdultezEnMarDeAjo() {
	return (
		<div className='page'>
			<Image
				alt='Ser Resiliente'
				height={160}
				src='/books/ser-resiliente.png'
				width={497}
			/>

			<div className='page-subtitle'>
				Capítulo
			</div>

			<div className='page-subtitle'>
				&quot;Mi juventud y adultez en Mar de Ajó&quot;
			</div>

			<VideoContainer src='https://www.youtube.com/embed/3bYVNZzONq0'/>
		</div>
	)
}

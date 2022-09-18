import VideoContainer from '../../components/VideoContainer.jsx';
import Image from 'next/image';

export default function MiEnfermedadElAprendizajeMasGrandeDeMiVida() {
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
				&quot;Mi enfermedad, el aprendizaje más grande de mi vida&quot;
			</div>

			<VideoContainer src='https://www.youtube.com/embed/TnTWH6BVLqM'/>
		</div>
	)
}

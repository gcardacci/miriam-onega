import VideoContainer from '../../components/VideoContainer.jsx';
import WritingText from '../../components/WritingText.jsx';
import Image from 'next/image';

export default function MiEnfermedadElAprendizajeMasGrandeDeMiVida() {
	return (
		<div className='page'>
			<Image
				alt='Ser Resiliente'
				height={160}
				src='/books/ser-resiliente/ser-resiliente.png'
				width={497}
			/>

			<div className='page-subtitle'>
				Capítulo
			</div>

			<div className='chapter-name'>
				<WritingText
					msg='"Mi enfermedad, el aprendizaje más grande de mi vida"'
					speed={75}
				/>
			</div>

			<VideoContainer src='https://www.youtube.com/embed/TnTWH6BVLqM'/>
		</div>
	)
}

import Image from 'next/image';

export default function SerResiliente() {
	return (
		<div className='page'>
			<Image
				alt='Ser Resiliente'
				height={160}
				src='/books/ser-resiliente/ser-resiliente.png'
				width={497}
			/>

			<div className='page-subtitle'>
				[TEXTO CONTRATAPA]
			</div>

			<Image
				alt='Ser Resiliente'
				height={250}
				src='/books/ser-resiliente/ser-resiliente-animacion.gif'
				width={250}
			/>
		</div>
	)
}

import Link from 'next/link'

export default function Books() {
	return (
		<div className='page'>
			<div className='page-title'>
				Libros
			</div>

			<Link href='/books/ser-resiliente'>
				<div>
					Ser Resiliente
				</div>
			</Link>
		</div>
	)
}

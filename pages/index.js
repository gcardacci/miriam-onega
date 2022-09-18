import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					Miriam Onega
				</title>

				<meta
					content='App sobre Miriam Onega'
					name='description'
				/>

				<link
					href='/favicon.ico'
					rel='icon'
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					¡Bienvenido a mi espacio!
				</h1>

				<Image
					alt='Miriam Onega Logo'
					height={500}
					src='/Miriam Onega.png'
					width={500}
				/>

				<Link href='/books/ser-resiliente'>
					<div className={styles.grid}>
						<a className={styles.card}>
							<h2>Ser Resiliente &rarr;</h2>

							<p>Mi libro</p>
						</a>
					</div>
				</Link>
			</main>
		</div>
	)
}

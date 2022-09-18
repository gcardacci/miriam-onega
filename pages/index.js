import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
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
					rel='shortcut icon'
				/>
			</Head>

			<main>
				<div style={{
					margin: '25px 0'
				}}>
					<Image
						alt='Miriam Onega Logo'
						height={274}
						src='/miriam-onega.png'
						width={390}
					/>
				</div>

				<div style={{ marginTop: '100px' }}>
					<Link href='/books/ser-resiliente'>
						<div className={styles.grid}>
							<a className={styles.card}>
								<h2>Ser Resiliente &rarr;</h2>

								<p>Mi libro</p>
							</a>
						</div>
					</Link>
				</div>
			</main>
		</div>
	)
}

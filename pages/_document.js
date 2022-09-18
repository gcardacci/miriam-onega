import {
	Html, Head, Main, NextScript
} from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com'
					rel='preconnect'
				/>

				<link
					crossorigin
					href='https://fonts.gstatic.com'
					rel='preconnect'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<body>
				<Main/>

				<NextScript/>
			</body>
		</Html>
	)
}

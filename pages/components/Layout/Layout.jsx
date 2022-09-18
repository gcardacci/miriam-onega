import { Fragment } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function Layout({ children }) {
	return (
		<Fragment>
			<Header/>

			<main className='layout-component'>
				<div className='layout-content'>
					{children}
				</div>
			</main>

			<Footer/>
		</Fragment>
	)
}

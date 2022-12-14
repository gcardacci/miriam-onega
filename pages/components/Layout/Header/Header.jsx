import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const buttonList = [{
	description: 'Inicio',
	goToPage: '/'
}, {
	description: 'Libros',
	goToPage: '/books'
}]

export default function Header() {
	/* ===== State ===== */
	const [isNavVisible, setNavVisibility] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	const toggleNav = () => {
		setNavVisibility(prevState => !prevState);
	};

	function renderNavButtons() {
		return buttonList.map(b => {
			const { description, goToPage } = b;

			return (
				<Link
					href={goToPage}
					key={description}
				>
					<a onClick={() => setNavVisibility(false)}>
						{description}
					</a>
				</Link>
			)
		})
	}

	function renderToggleButton() {
		if (isMobile) {
			return (
				<Image
					alt='Toggle button'
					height={50}
					onClick={toggleNav}
					src='/icons/menu-outline.svg'
					width={50}
				/>
			)
		}

		return null;
	}
	
	/* ===== Effects ===== */
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 699px)');

		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	return (
		<header className={`header-component${isMobile ? ' is-mobile' : ' is-desktop'}`}>
			{renderToggleButton()}

			<CSSTransition
				classNames='navAnimation'
				in={isNavVisible || !isMobile}
				timeout={350}
				unmountOnExit
			>
				<nav className='header-nav'>
					{renderNavButtons()}
				</nav>
			</CSSTransition>
		</header>
	);
}
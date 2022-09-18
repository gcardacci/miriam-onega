import React, { useState, useEffect } from 'react';

const Typer = ({ speed = 250, text = '' }) => {
	const [idx, setidx] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => setidx(v => v + 1), speed);

		return () => window.clearInterval(timer);
	});

	return (
		<div>
			{text.substr(0, idx)}
		</div>
	);
};

const WritingText = props => {
	const { speed, msg } = props;
	return (
		<div>
			<Typer
				speed={speed}
				text={msg}
			>
			</Typer>
		</div>
	);
};

export default WritingText;
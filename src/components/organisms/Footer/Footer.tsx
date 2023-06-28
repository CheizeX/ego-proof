const Footer = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				minHeight: '50px',
				backgroundColor: '#0f0f0f',
				color: '#fff',
			}}
		>
			All rights reserved © {new Date().getFullYear()}
		</div>
	);
};

export default Footer;

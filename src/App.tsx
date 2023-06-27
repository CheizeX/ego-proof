import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/main.theme';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { SelectedTabEnum } from './interfaces/interfaces';

function App() {
	const [selected, setSelected] = useState(SelectedTabEnum.MODELOS);
	const [burgerOpen, setBurgerOpen] = useState(false);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Navbar
				selected={selected}
				setSelected={setSelected}
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
			/>
		</ThemeProvider>
	);
}

export default App;

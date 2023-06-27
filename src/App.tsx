import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/main.theme';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { SelectedTabEnum } from './interfaces/interfaces';
import { store } from './redux';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<Navbar />
			</ThemeProvider>
		</Provider>
	);
}

export default App;

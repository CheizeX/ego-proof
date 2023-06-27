import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/main.theme';
import { store } from './redux';
import { Provider } from 'react-redux';
import Navigation from './routes/Navigation';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<Navigation />
			</ThemeProvider>
		</Provider>
	);
}

export default App;

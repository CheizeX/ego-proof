import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/main.theme';
import Navbar from './components/organisms/Navbar/Navbar';
import { store } from './redux';
import { Provider } from 'react-redux';
import Sidebar from './components/organisms/Sidebar/Sidebar';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<Navbar />
				<Sidebar />
			</ThemeProvider>
		</Provider>
	);
}

export default App;

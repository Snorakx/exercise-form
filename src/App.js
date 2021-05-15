import HomeScreen from './pages/home/index';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/customButton.scss';
import './styles/form.scss';
import './styles/header.scss';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;

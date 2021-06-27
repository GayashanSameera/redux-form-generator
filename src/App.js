import { Provider } from 'react-redux';
import store from './redux/store';
import routes from './routes';
import logo from './logo.svg';
import './App.css';

const App = () => <Provider store={store}>{routes}</Provider>;

export default App;

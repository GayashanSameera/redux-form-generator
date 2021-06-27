import { Provider } from 'react-redux';
import store from './redux/store';

import logo from './logo.svg';
import './App.css';


import SampleFormOne from './SampleFormOne';

const App = () => <Provider store={store}><SampleFormOne/></Provider>;

export default App;

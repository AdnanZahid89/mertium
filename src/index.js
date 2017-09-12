import React from 'react';
import ReactDOM from 'react-dom';
import './styles/font-awesome.min.css';
import './styles/main.css';
import './styles/bootstrap.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

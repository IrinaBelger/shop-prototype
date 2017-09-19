import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import MuiThemeProvider from './../node_modules/material-ui/styles/MuiThemeProvider';
import reducer from './reducers';
import injectTapEventPlugin from './../node_modules/react-tap-event-plugin';
import './css/index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
injectTapEventPlugin();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Component = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>
);
ReactDOM.render(<Component />, document.getElementById('root'));
registerServiceWorker();
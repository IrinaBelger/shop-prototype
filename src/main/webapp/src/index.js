import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, dispatch } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HashRouter } from 'react-router-dom';

import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import reducer from './reducers';
import injectTapEventPlugin from '../node_modules/react-tap-event-plugin';
import './css/index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
injectTapEventPlugin();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const Component = () => (
    <Provider store={store}>
        <MuiThemeProvider>
                <HashRouter>
                    <App/>
                </HashRouter>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<Component />, document.getElementById('root'));
registerServiceWorker();
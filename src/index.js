import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';


import {Provider} from 'react-redux';
import store from './store'
import {history} from './store'

import { Route } from 'react-router'
import { ConnectedRouter} from 'react-router-redux'

import MainContainer from './containers/MainContainer'


import FixedMenuLayout from './containers/FixedMenuLayout'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainContainer/>
        </ConnectedRouter>
    </Provider>

, document.getElementById('app')
);





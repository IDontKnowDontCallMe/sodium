import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import {Provider} from 'react-redux';
import store from './store'

import LoginPage from './containers/LoginPage'
import WangEditor from './components/WangEditor'

ReactDOM.render(
    <Provider store={store}>
        <WangEditor/>
    </Provider>, document.getElementById('app')
);




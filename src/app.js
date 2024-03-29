import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';


import {Provider} from 'react-redux';
import store from './store'
import {history} from './store'

import { Route } from 'react-router-dom'
import { ConnectedRouter} from 'react-router-redux'

import MainContainer from './containers/MainContainer'


export default class App extends React.Component{

    render(){

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MainContainer/>
                </ConnectedRouter>
            </Provider>
        )

    }

}
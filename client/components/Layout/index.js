/**
 * Created by ahsan.zaman on 11/10/2017.
 */
import React from 'react';
import Header from '../Header/index';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import Login from '../pages/login';
import Register from '../pages/register';
import Forget from '../pages/forget';



import configure from '../../store';
import styles from './style.css';

const store = configure()
const history = syncHistoryWithStore(hashHistory, store)

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class={styles.accounts}>
                    <div class="container">
                        <div class="row">
                            <div
                                class={`col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 ${styles.controls} z-depth-1`}>
                                <Provider store={store}>
                                    <Router history={history}>
                                        <Route path="/" component={Login}/>
                                        <Route path="/register" component={Register}/>
                                        <Route path="/forget" component={Forget}/>
                                    </Router>
                                </Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from '../store/modules';
import { Provider } from 'react-redux';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

import App from './App.jsx';

class MainPage extends React.Component {

    render() {

        // **** 리덕스 개발자도구 적용

        console.log(store.getState());

        return (
        	<React.Fragment>
                    <Router>
                        <Route path={"/"} exact
                               render={({history, location, match}) =>
                                    <App history={history} location={location} match={match}/>
                               }
                        />
                    </Router>
        	</React.Fragment>
        );
    }
 
}
 
ReactDOM.render(<Provider store={store}><MainPage/></Provider>, document.getElementById('root'));
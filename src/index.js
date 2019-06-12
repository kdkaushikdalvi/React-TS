import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

import './index.css';
import App from './App';
import Demo from './component/demo';
import Dashboard from './component/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/todo" exact component={App}/>
                    <Route path="/Demo" exact component={Demo}/>
                    <Route path="*" component={Dashboard}/>
                </Switch>
            </Router>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);



import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/about" component={About} />
                <PrivateRoute path="/contact" component={Contact} />
                <PrivateRoute path="/posts/:post_id" component={Post} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;

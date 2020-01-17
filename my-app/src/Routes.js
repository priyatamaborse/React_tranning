import React ,{ Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

//views
import User from './components/Users'
import Contact from './components/Contact'
import About from './components/About'

export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Redirect exact from="/" to="/dashbord" />
                <Route component={User} exact path="/users" />
                <Route component={Contact} exact path="/contact" />
                <Route render={props => <About {...props} />} path="/aboutus" />
            </Switch>
        );
    }
}
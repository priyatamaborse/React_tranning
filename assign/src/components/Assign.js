import React ,{ Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

//views
import Add from './Add'
import Update from './Update'
import Delete from './Delete'
import Display from './Display'


export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Redirect render={props => <Display {...props} />} exact from="/" to="/display" />
                <Route render={props => <Add {...props} />} path="/add" />
                <Route component={Update} exact path="/update" />
                <Route  component={Delete} exact path="/delete" />
            </Switch>
        );
    }
}
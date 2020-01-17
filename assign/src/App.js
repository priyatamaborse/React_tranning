import React from 'react';
import './App.css';
import ReactDOM from "react-dom"; 
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Assign from './components/Assign'
import Display from './components/Display'


const browserHistory = createBrowserHistory();


function App() {
 


  return (<>
    <html>
      <head>
     
      </head>
    <body>
        <div>
              <Router  history ={browserHistory}>
                <Display />
                <Assign />
             
              </Router>
            </div>
    </body>
    </html>
    </> 
  );
}

export default App;

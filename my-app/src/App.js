import React from 'react';
import './App.css';
import Header from './components/Heder'
import Footer from './components/Footer'
import Counter from './components/Counter';
import UserTable from './components/UserTable'
import PropsTest from './components/PropsTest'
import ReactDOM from "react-dom"; 
import Employee from './components/Employee';
import Routes from './Routes';
import Dashbord from './components/Dashbord';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Assign from './components/Assign'
import Display from './components/Display'
import CheckPropType from './components/CheckPropType'

const browserHistory = createBrowserHistory();


function myFunction(){
  ReactDOM.render(<CheckPropType name={"priya"} age={12} />, document.getElementById("temp"));
}
function unmountComponent(type){

  if(type==="mount"){
      ReactDOM.render(<Employee />, document.getElementById("myTable"));
  }
  else{
      ReactDOM.unmountComponentAtNode(document.getElementById("myTable"));
  }

}

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

        <button onClick={()=>myFunction()}>Prop Type Check</button>
        <div id="temp"></div>
    </body>
    </html>
    </> 
  );
}
/*
function App() {
 


  return (
    <html>
      <head>
     
      </head>
    <body>

    <Header />

        <div className="App">
          
          <p> React is a JavaScript library for building user interfaces.</p>
          <p> It is maintained by Facebook and a community of individual developers and companies. </p>
          <p> React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded
          </p>

          <Counter initialValue={5} />
          <UserTable />
         <PropsTest name="Smita" data={{ myData:[
                {
                    name:"divya1",
                    skill:"springBoot",
                    company:"yash"
                },
                {
                    name:"priya1",
                    skill:"spring",
                    company:"yash"
                },
                {
                    name:"megha1",
                    skill:"springMVC",
                    company:"yash"
                }
                
            ]}}/>

           
            
        </div>
       
        <button onClick={() => unmountComponent("mount")}>mount</button>
        
            <button  onClick={() => unmountComponent("unmount")}>Unmount</button>
            <div id="myTable"></div>


            <div>
              <Router history ={browserHistory}>
                <Dashbord />
                <Routes />
             
              </Router>
            </div>

        <Footer/>

       
        
    </body>
    </html> 
  );
} */

export default App;

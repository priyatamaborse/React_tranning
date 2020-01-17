import React,{Component} from 'react';

class About extends Component{

    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }
    myFunction()
    {
        this.setState({
            redirect:true
        })
    }

    componentDidUpdate(){
        if(this.state.redirect){
            this.props.history.push('/dashbord');
        }
        
    }

    render()
    {
        return(
            <button onClick= {() =>this.myFunction()}>Change state</button>
        );
    }
}

export default About;
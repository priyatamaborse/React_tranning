import React,{Component} from 'react';


class Add extends Component{

    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }
    myFunction()
    {
        this.setState({
            redirect:true,

        })
    }

    componentDidUpdate(){
        if(this.state.redirect){
            this.props.history.push('/display');
            
        }
        
    }

    render()
    {
        return(
          <>
            <form>
            <div >
              <label>Name:</label>
              <input id="name"/>
              <label>Skill:</label>
              <input id="skill" />
              <label>Company:</label>
              <input id="company" />
            </div>
          </form>
    
            <button onClick= {() =>this.myFunction()}>Add</button>
          </>
        );
    }
}

export default Add;
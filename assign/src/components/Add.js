import React,{Component} from 'react';


class Add extends Component{

    constructor(props){
        super(props);
        this.state={
            redirect:false,
            datas:[]
        }
    }
    myFunction=(e)=>
    {
      let datas = this.datas;
      let name= this.refs.name.nodeValue;
      let skill= this.refs.skill.nodeValue;
      let company= this.refs.company.nodeValue;
      let data={
        name,skill,company
      }
      this.state.datas.push(data);

        this.setState({
            redirect:true,
            datas:datas

        });
        this.refs.myForm.reset();
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
            <form ref="myForm" classname="myForm">
            <div >
              <label>Name:</label>
              <input type="text" ref="name" placeholder="your name" className="formField"/>
              <label>Skill:</label>
              <input type="text" ref="skill" placeholder="your name" className="formField"/>
              <label>Company:</label>
              <input type="text" ref="company" placeholder="your name" className="formField"/>
            </div>
          </form>
    
            <button onClick= {(e) =>this.myFunction(e)}>Add</button>
          </>
        );
    }
}

export default Add;
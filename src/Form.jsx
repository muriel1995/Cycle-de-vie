import React, {Component} from 'react';

class Form extends Component{
  constructor (props){
    super (props);
    this.state={  
      title:"",
      globalTitle:""
    }
  }

  componentDidMount (){
    console.log('Formulaire rendu')
  }
    
  onChange = (e)=>{
    this.setState({title:e.target.value})
  }
  
  getSubmit = (e) => {
    e.preventDefault()
    this.setState({globalTitle:`Mon Formulaire - ${this.state.title}`})
  }

  componentDidUpdate(){
    console.log('Titre changé')
  }

  render(){
    return (
      <div className="App">
      <h1> {this.state.globalTitle}</h1>      
        <form onSubmit={this.getSubmit}>
          <input type="text" 
                name='text' 
                id='text'
                value={this.state.title}
                onChange={this.onChange}
                />
                

          <button> cliquez</button>
        </form>
        
      </div>
    );
  }
  
}

export default Form;
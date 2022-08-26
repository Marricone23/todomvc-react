import {Component} from 'react';

import "./todo-add-item.css"

class TodoAddItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            todo: '',
            isChecked: true
        } 
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }   
    
    onSubmit = (e) => {
      e.preventDefault();           
      this.props.onAdd(this.state.todo);
      this.setState({
          todo: ''
      })        
    }

    handleInputChange = () => {     
        this.setState({        
         isChecked: !this.state.isChecked
        });
      }
    
    onKeyDown = (e) => {   
          if (e.key === 'Enter') {
            this.onSubmit();            
            console.log("press")
          }          
    }

    render () {      
       const { todo } = this.state;        
       return (
            <div>  
                <input className = "toggle-all"
                  id="toggle-all"
                  type="checkbox"
                  data-reactid=".0.1.0"
                  defaultChecked = {this.state.isChecked}
                  onChange = {this.handleInputChange}                            
                  />                
                <label htmlFor="toggle-all" data-reactid=".0.1.1"></label>            
            <form
            onSubmit = {this.onSubmit}>              
            <input 
            type="text"
            className="new-todo"
            placeholder="What needs to be done?" 
            name = "todo"
            value = {todo}
            onChange = {this.onValueChange}
            onKeyDown = {this.onKeyDown}           
            />          
            {/*<button type="submit"
                    className="btn btn-outline-light">Добавить</button>*/}
           </form>
           </div>
        )
    }
}

export default TodoAddItem;


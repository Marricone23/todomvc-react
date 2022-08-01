import {Component} from 'react';

import "./todo-add-item.css"

class TodoAddItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            todo: ''
        }   

    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.todo] : e.target.value
        })
    }    
    
   onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
    //    if (this.state.todo.length < 4) return;
    //    this.props.onAdd(this.state.todo);
      this.setState({
          todo: ''
      })
        
    }
    
    onKeyDown = (e) => {  
            if (e.key === 'Enter') {
            this.props.onAdd(this.state.todo);          
            console.log("press")
          }
          this.setState({
            todo: ''
        })
        
    }

    render () {       
        return (
            <div>  
                <input class="toggle-all" id="toggle-all" type="checkbox" data-reactid=".0.1.0"></input>
                <label for="toggle-all" data-reactid=".0.1.1"></label>            
            <form
            onSubmit = {this.onSubmit}>              
            <input type="text"
            className="new-todo"
            placeholder="What needs to be done?" 
            name = "todo"
            value = {this.setState.todo}
            onChange = {this.onValueChange}
            onKeyDown={this.onKeyDown}>
            </input>
            {/*<button type="submit"
                    className="btn btn-outline-light">Добавить</button>*/}
           </form>
           </div>
        )
    }


}

export default TodoAddItem;


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
        
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.todo.length < 3) return;
        this.props.onAdd(this.state.todo);
        this.setState({
            todo: ''
        })
        e.preventDefault();
    }
    
    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit();
            console.log("press")
          }
    }

    render () {       
       // const { todo } = this.state;
        return (
            <div>
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
            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
           </form>
            </div>
        )
    }


}

export default TodoAddItem;


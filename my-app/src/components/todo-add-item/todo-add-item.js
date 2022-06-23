import {Component} from 'react';

import "./todo-add-item.css"

class TodoAddItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            todo: ''
        }   

    }

    /*onUpdateItem = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateItem(term)
    }*/

    onValueChange = (e) => {
        this.setState({
            [e.target.todo] : e.targte.value
        })
    }    
    
    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.todo.length < 3) return;
        this.props.onAdd(this.state.todo);
        this.setState({
            todo: ''
        })
    }
    
    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit();
            console.log("press")
          }
    }

    render () {       
        const {todo} = this.state;
        return (
            <>
            <input type="text"
            className="new-todo"
            placeholder="What needs to be done?" 
            name = "todo"
            value = {this.setState.todo}
            /*onChange = {this.onUpdateItem}*/
            onChange = {this.onValueChange}
            onSubmit = {this.onSubmit}
            onKeyDown={this.onKeyDown}>
            </input>
            </>
        )
    }


}

export default TodoAddItem;


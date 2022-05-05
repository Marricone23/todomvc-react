import {Component} from 'react';

import "./todo-add-item.css"

class TodoAddItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            term: ''
        }   

    }

    onUpdateItem = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateItem(term)
    }


    render () {

        return (
            <>
            <input 
            className="new-todo"
            placeholder="What needs to be done?" 
            value = {this.setState.term}
            onChange = {this.onUpdateItem}>
            </input>
            </>
        )
    }


}

export default TodoAddItem;


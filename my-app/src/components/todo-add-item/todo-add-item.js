import {Component} from 'react';

import "./todo-add-item.css"

class TodoAddItem extends Component {
    constructor (props){
        super(props);


    }


    render () {

        return (
            <>
            <input className="new-todo" placeholder="What needs to be done?" value=""></input>
            </>
        )
    }


}

export default TodoAddItem;


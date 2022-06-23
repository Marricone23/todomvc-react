import { Component } from "react";

import "./todo-list-item.css"

class TodoListItem extends Component {
    constructor(props){
       super(props);
       this.state = {
            completed: false   
       }

    }
    
   
    onCompleted =()=> {
        this.setState(({completed}) => ({
            completed: !completed
   
        }))
    }

   
    render() {
        
    const {todo, onDelete} = this.props;
    const {completed} = this.state
        let classNames = "main";
        if (completed) {
            classNames += ' completed';
        }  


        return(
            
            <li className={classNames}>
                <div className="view">
                <label 
                    onClick={this.onCompleted}>
                    {todo}</label>
                    <input                     
                     className="toggle-all" 
                     type="checkbox">                        
                     </input>
                    <button 
                    className="destroy"
                    onClick={onDelete}>
                    </button></div>
                    <input 
                    className="edit"
                    value="todo">                     
                    </input>
            </li>
           
        )

 }



}
export default TodoListItem;


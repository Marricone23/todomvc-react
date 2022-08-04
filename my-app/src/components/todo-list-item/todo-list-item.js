import { Component } from "react";

import "./todo-list-item.css"

class TodoListItem extends Component {
    constructor(props){
       super(props);
       this.state = {
           isChecked: true
       }

    }

    handleInputChange = (event) => {     
        this.setState({        
         isChecked: !this.state.isChecked
        });
      }
   
    render() {
  
    const {todo, onDelete, onToggleCompleted, completed} = this.props;
   
        let classNames = "main";

        if (completed) {
            classNames += ' completed';
        }        
     

        return(            
            <li className = {classNames}>
                <div className="view">
                <label 
                    onClick={onToggleCompleted}>
                    {todo}</label>
                    <input                     
                     className="toggle" 
                     name = "isChecked"
                     type="checkbox"
                     defaultValue="check"
                     defaultChecked = {this.state.isChecked}
                     onChange = {this.handleInputChange}>                        
                     </input>
                    <button 
                    className="destroy"
                    onClick={onDelete}>
                    </button></div>
                    <input 
                    className="edit"
                    name='todo'
                    defaultValue = {todo}>                     
                    </input>
            </li>           
        )
 }

}
export default TodoListItem;


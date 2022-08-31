import { Component } from "react";

import "./todo-list-item.css"

class TodoListItem extends Component {
    constructor(props){
       super(props);
       this.state = {
           isChecked: true
       }

    }

    handleInputChange = () => {     
        this.setState({        
         isChecked: !this.state.isChecked
        });
      }
   
    
    render() {
  
    const {todo, onDelete, onToggleCompleted, completed } = this.props;
   
        let classNames = "main";
       

        if (completed) {
            classNames += ' completed';
            
        } else {
            classNames += ' active';  
        }
          

        return(            
            <li className = {classNames}>
                <div className="view">
                <label>
                <input  type = "text"  
                       className = "edit"                                                  
                       defaultValue = {todo}
                       name = "todo"/> 
                    
                    </label>
                      <input                     
                       className="toggle"
                       name = "isChecked"
                       type="checkbox"
                       defaultValue="todo"
                       defaultChecked = {this.state.isChecked}
                       onChange = {this.handleInputChange}
                       onClick = {onToggleCompleted}                                                          
                       >                                        
                      </input>

                     
                       

                    <button 
                    className = "destroy"
                    onClick = {onDelete}>
                    </button>

                </div>                                     
                    
            </li>           
        )
 }

}
export default TodoListItem;


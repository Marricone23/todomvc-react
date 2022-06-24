//import { Component } from "react";

import "./todo-list-item.css"

const TodoListItem = (props) => {
  /*  constructor(props){
       super(props);
       this.state = {
            completed: false   
       }

    }*/
    
   
  /*  onCompleted =()=> {
        this.setState(({completed}) => ({
            completed: !completed
   
        }))
    }*/

   
  //  render() {
        
    const {todo, onDelete, onToggleCompleted, completed} = props;
    //const {completed} = this.state
        let classNames = "main";
        if (completed) {
            classNames += ' completed';
        }  


        return(
            
            <li className={classNames}>
                <div className="view">
                <label 
                    //onClick={this.onCompleted}
                    onClick={onToggleCompleted}>
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



//}
export default TodoListItem;


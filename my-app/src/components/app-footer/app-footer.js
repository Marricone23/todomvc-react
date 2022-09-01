
import { Component } from "react";
import TodoCount from "../todo-count/todo-count";

import "./app-footer.css";

class AppFooter extends Component {
 constructor(props){
    super(props);
 }

 render () {

    let ClassNamess =  "clear-completed" 

    let classNamezz = "footer"
 
    const {todos, completed, onDelete} = this.props;

    if(todos) {
        classNamezz += " footer-active"
    }

    if (completed >= todos ) {
        ClassNamess += " clear-active"

    }

    return (

        <footer className={classNamezz} data-reactid=".0.2">
            <TodoCount 
            todos = {todos}
            completed = {completed}
            />
               
             <button 
             className = {ClassNamess}
             data-reactid=".0.2.2"
             onClick={onDelete}>
             Clear completed</button>
        </footer>
    ) 
}

}

export default AppFooter;
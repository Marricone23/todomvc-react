
import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import TodoCount from "../todo-count/todo-count";


import "./app-footer.css";

class AppFooter extends Component {


 render () {

    let ClassNamess =  "clear-completed" 

    let classNamezz = "footer"
 
    const {todos, completed, onDelete, filter, onFilterSelect} = this.props;

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

            <AppFilter 
             todos = {todos}  
             filter={filter}
             onFilterSelect={onFilterSelect} 
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
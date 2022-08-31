

import { Component } from "react";
import TodoCount from "../todo-count/todo-count";

import "./app-footer.css";


//const AppFooter = ({todos, completed, onDelete}) => {

class AppFooter extends Component {
 constructor(props){
    super(props);

 }

 render () {

    let ClassNamess =  "clear-completed" 

    const {todos, completed, onDelete} = this.props;

    if (completed >= todos ) {
        ClassNamess += " clear-active"

    }

    return (

        <footer className="footer" data-reactid=".0.2">
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
//}

}

    }


  





export default AppFooter;
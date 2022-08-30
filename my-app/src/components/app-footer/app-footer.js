

import TodoCount from "../todo-count/todo-count";

import "./app-footer.css";


const AppFooter = ({todos, completed, onDelete}) => {


    return (

        <footer className="footer" data-reactid=".0.2">
            <TodoCount 
            todos = {todos}
            completed = {completed}
            />
               
             <button className="clear-completed" 
             data-reactid=".0.2.2"
             onClick={onDelete}>
             Clear completed</button>
        </footer>
    ) 
}




  





export default AppFooter;
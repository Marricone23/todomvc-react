import AppFilter from "../app-filter/app-filter";
import TodoCount from "../todo-count/todo-count";

import "./app-footer.css";

const AppFooter = ({todos, completed, filter, onFilterSelect}) => {

return (
    <footer className="footer" data-reactid=".0.2">
        <TodoCount 
        todos = {todos}
        completed = {completed}
        />
        <AppFilter
        filter={filter} 
        onFilterSelect={() => onFilterSelect()}/>        
         <button className="clear-completed" data-reactid=".0.2.2">Clear completed</button>
    </footer>
)    
}

export default AppFooter;
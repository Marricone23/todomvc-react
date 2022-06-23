import "./app-footer.css";

import AppFilter from "../app-filter/app-filter";
import TodoCount from "../todo-count/todo-count";

const AppFooter = ({todos}) => {

return (
    <footer class="footer" data-reactid=".0.2">
        <TodoCount todos={todos}/>
        <AppFilter/>        
        <button class="clear-completed" data-reactid=".0.2.2">Clear completed</button>
    </footer>
)    
}

export default AppFooter;
import "./todo-list-item.css"

const TodoListItem = (props) => {
    
    const {todo, onDelete, completed, toggle} = props;
    
        return(
            <>
            <li className='todo-list'>
                <div className="view">
                <label data-toggle={completed}>{todo}</label>
                    <input
                     className="toggle-all" 
                     type="checkbox"></input>
                    <button 
                    className="destroy"
                    onClick={onDelete}>
                    </button></div>
                    <input 
                    className="edit"
                    value="todo">                     
                    </input>
            </li>
           </>
        )





}
export default TodoListItem;


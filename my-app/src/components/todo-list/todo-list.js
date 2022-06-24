import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({data, onDelete, onToggleCompleted}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TodoListItem 
            key={id}
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
            />

        )
    })

    return (
        <ul className="todo-list">
           {elements}
        </ul>
    )
}

export default TodoList;
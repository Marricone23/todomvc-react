import "./todo-count.css"


const TodoCount = ({todos, completed}) =>
{
return (
    <span className="todo-count" data-reactid=".0.2.0">
    <strong data-reactid=".0.2.0.0"> {completed || todos ? completed : todos} </strong>
    <span data-reactid=".0.2.0.1"> </span>
    <span data-reactid=".0.2.0.2">item</span>
    <span data-reactid=".0.2.0.3"> left</span></span>
)

}

export default TodoCount;
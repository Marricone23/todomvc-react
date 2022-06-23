import "./app-filter.css";

const AppFilter = () => {


    return (
    <ul class="filters" data-reactid=".0.2.1">
        <li data-reactid=".0.2.1.0">
            <a href="#/" class="selected" data-reactid=".0.2.1.0.0">All</a>
        </li><span data-reactid=".0.2.1.1"> </span>
        <li data-reactid=".0.2.1.2">
            <a href="#/active" class="" data-reactid=".0.2.1.2.0">Active</a></li>
            <span data-reactid=".0.2.1.3"> </span>
        <li data-reactid=".0.2.1.4">
            <a href="#/completed" class="" data-reactid=".0.2.1.4.0">Completed</a></li>
    </ul>
    )

};

export default AppFilter;
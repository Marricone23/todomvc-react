import "./app-filter.css";

const AppFilter = (props) => {
   
    const buttonsData = [
         {name: 'all', lable: "All"},
         {name: 'active', lable: "Active"},
         {name: 'completed', lable: "Completed"},
    ]

    const buttons = buttonsData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz = active ? 'selected' : 'btn';
       

        return (
            <li data-reactid=".0.2.1.0">
            <button 
            type="button" 
            className={`btn ${clazz}`} 
            data-reactid=".0.2.1.0.0"
            key={name}
            onClick = {()=>props.onFilterSelect(name)}
            >{lable}</button>
            </li> 
        )
    })

    return (
    <ul className="filters" data-reactid=".0.2.1">
        
          { /* <button type="button" class="btn selected" data-reactid=".0.2.1.0.0">All</button>*/}
           {buttons}
           <span data-reactid=".0.2.1.1"> </span>
          
       {/*<li data-reactid=".0.2.1.2">
            <button type="button" class="btn " data-reactid=".0.2.1.2.0">Active</button></li>
            <span data-reactid=".0.2.1.3"> </span>
        <li data-reactid=".0.2.1.4">
    <button type="button" class="btn " data-reactid=".0.2.1.4.0">Completed</button></li>*/}
    </ul>
    )

};

export default AppFilter;
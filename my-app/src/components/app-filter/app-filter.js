import "./app-filter.css";

const AppFilter = (props, todos) => {
   
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
    
  
    let classfilter = "filters"
   
    if (todos) {
       classfilter += " filters-active"}
   

    return (
           <ul 
           className = {classfilter}   
           data-reactid=".0.2.1">              
           {buttons}
           <span data-reactid=".0.2.1.1"> </span>     
           </ul>
    )

};

export default AppFilter;
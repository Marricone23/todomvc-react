import { Component } from 'react';

import TodoAddItem from '../todo-add-item/todo-add-item';
import AppFooter from '../app-footer/app-footer';
import TodoList from '../todo-list/todo-list';

import logo from '../../resources/img/logo.png';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      data: [
        {todo:'wash the dishes', toggle: false, completed: true, active: true, id: 1},
        {todo:'cut the grass', toggle: true, completed: false, active: false, id: 2 },
        {todo:'smoke a cigarette', toggle: false, completed: false, active: false, id: 3},
      ],
      filter: " "
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
}

  addItem = (todo) => {
    const newItem = {
        todo, 
        toggle: false,
        completed: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

onToggleCompleted = (id) => {
  this.setState(({data}) => ({
      data: data.map(item => {
          if (item.id === id) {
              return {...item, completed: !item.completed}
          }
          return item;
      })
  }))
}

filterTodo = (items, filter) => {
  switch (filter){
    case 'active':
      return items.filter(item => item.active);
    case 'completed':
      return items.filter(item => item.completed);
    default:
      return items    
  }
}

onFilterSelect = (filter) => {
  this.setState({filter});
}

render(){
  const {data, filter} = this.state;
  const todos = this.state.data.length;
  const completed = this.state.data.filter(item => !item.completed).length;
  const visibleData = this.filterTodo(filter);

  return (
    <div className="app">
      <header className="header">
        <img className = "logo" src={logo} alt="logo"/>            
      </header>
      <section className="todoapp">
        <TodoAddItem 
        onAdd={this.addItem}/>

        <TodoList
         data = {data}
         onDelete={this.deleteItem}
         onToggleCompleted={this.onToggleCompleted}
        />       

        <AppFooter 
        todos = {todos} 
        completed = {completed}  
        filter={filter} 
        onFilterSelect={this.onFilterSelect}     
       />
      </section>
    </div>
  )
} 
  
}

export default App;

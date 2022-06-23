import { Component } from 'react';

import TodoAddItem from '../todo-add-item/todo-add-item';
import AppFooter from '../app-footer/app-footer';
import AppInfo from '../app-info/app-info';
import TodoList from '../todo-list/todo-list';
import AppFilter from '../app-filter/app-filter';


import logo from '../../resources/img/logo.png';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      data: [
        {todo:'wash the dishes', toggle: false, completed: true, id: 1},
        {todo:'cut the grass', toggle: true, completed: false, id: 2 },
        {todo:'smoke a cigarette', toggle: false, completed: false, id: 3},
      ]
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
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

render(){
  const {data} = this.state;

  return (
    <div className="app">
      <header className="header">
        <img className = "logo" src={logo} alt="logo"/>            
      </header>
      <section className="todoapp">
        <TodoAddItem onAdd={this.addItem}/>
        <TodoList
         data = {data}
         onDelete={this.deleteItem}/>
        <AppFooter/>
      </section>
    </div>
  );
} 
  
}

export default App;

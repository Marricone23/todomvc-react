import { Component } from 'react';

import TodoAddItem from '../todo-add-item/todo-add-item';
import AppFooter from '../app-footer/app-footer';
import AppInfo from '../app-info/app-info';
import TodoList from '../todo-list/todo-list';


import logo from '../../resources/img/logo.png';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);

    
  }

  render () {
    return (
      <div className="app">
        <header className="header">
          <img className = "logo" src={logo} alt="logo"/>            
        </header>
        <section className="todoapp">
          <TodoAddItem/>
          <AppFooter/>
  
        </section>
      </div>
    );
  }
}

export default App;

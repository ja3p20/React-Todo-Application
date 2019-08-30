import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddToDo';
import uuid from 'uuid';

class App extends React.Component{
state = {
  todos : [
    {
      id : uuid.v4(),
      name : 'Goto Gym',
      completed: false
    },
    {
      id : uuid.v4(),
      name : 'Meet up with Boss',
      completed: false
    },
    {
      id : uuid.v4(),
      name : 'Complete daily task',
      completed: false
    }
  ]
}

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) }); 
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //add todo 
  addTodo = (title) => {
    const newTodo = {
      id : uuid.v4(),
      name: title,
      completed: false 
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render(){
    //console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo  addTodo = {this.addTodo}/>

          <Todos todos={ this.state.todos } markComplete={this.markComplete}
          delTodo= {this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component{
state = {
  todos : [
    {
      id : 1,
      name : 'Goto Gym',
      completed: false
    },
    {
      id : 2,
      name : 'Meet up with Boss',
      completed: false
    },
    {
      id : 3,
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

  render(){
    //console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>Todo App</h1> */}
        <Todos todos={ this.state.todos } markComplete={this.markComplete}
        delTodo= {this.delTodo} />
      </div>
    );
  }
}

export default App;

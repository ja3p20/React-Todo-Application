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

  render(){
    //console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>Todo App</h1> */}
        <Todos todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;

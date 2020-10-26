import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    name: '',
    id: 0,
    done: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }

  handleToggleTodo = (itemId) => {
    this.setState({
      todo:this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item;
        }
      })
    })
  }

  handleAddTodo = (name) => {
    this.setState({
      todo:[...this.state.todo, {
        name: name,
        id: this.state.todo.length,
        done: false
      }]
    })
  }

  clearTodo = () => {
    this.setState({
      todo:this.state.todo.filter(item => (!item.done))
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTodo={this.handleAddTodo} />
        </div>
        <TodoList handleClearTodo={this.clearTodo} handleToggleTodo={this.handleToggleTodo} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;

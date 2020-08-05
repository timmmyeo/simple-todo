import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
import NewItem from "./components/NewItem"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      {
        id: 1, 
        text: "Add firebase for backend and add authentication for users",
        completed: false,
      },
      {
        id: 2, 
        text: "Add the weather on a different page",
        completed: false,
      }]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }

  handleSubmit(id, text) {
    this.setState(prevState => {
      return (
        {todos: [...prevState.todos, {id: id, text: text, completed: false}]}
      )
    })
  }

  handleTick(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {todos: updatedTodos}
    })
  }

  handleDelete(id) {
    this.setState(prevState => {
      return (
        {todos: prevState.todos.filter(todo => todo.id !== id)}
      )
    });
  }

  render() {
    const todoItems = this.state.todos.map((todo) => 
    <TodoItem 
      key={todo.id} 
      handleTick={this.handleTick} 
      completed={todo.completed} 
      handleDelete={this.handleDelete} 
      id={todo.id} 
      text={todo.text} 
    />)

    return(
      <div>
        <Header />
        <br />
        <NewItem onSubmit={this.handleSubmit}/>
        <br />
        {todoItems}
        <Footer />
      </div>
    )
  }
  
}

export default App;

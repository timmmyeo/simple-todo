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
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(id, text) {
    this.setState(prevState => {
      return (
        {todos: [...prevState.todos, {id: id, text: text}]}
      )
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
    const todoItems = this.state.todos.map((todo) => <TodoItem key={todo.id} handleDelete={this.handleDelete} id={todo.id} text={todo.text} />)
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

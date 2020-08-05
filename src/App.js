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
  }

  handleSubmit(text) {
    this.setState(prevState => {
      return (
        {todos: [...prevState.todos, text]}
      )
    })

  }

  render() {
    const todoItems = this.state.todos.map((todo) => <TodoItem text={todo} />)
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

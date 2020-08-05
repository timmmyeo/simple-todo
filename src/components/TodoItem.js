import React from "react"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Card border="dark" bg="light">
          <Card.Body>{this.props.text}</Card.Body>
        </Card>
      </div>
    )
  }
}

export default TodoItem
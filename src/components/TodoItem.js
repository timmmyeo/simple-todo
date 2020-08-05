import React from "react"
import {Card, Button} from 'react-bootstrap/';

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <div>
        <Card border="dark" bg="light">
          <Card.Body>{this.props.text}<Button onClick={this.handleClick} className="float-right" variant="danger">Delete</Button>{' '}</Card.Body>
        </Card>
      </div>
    )
  }
}

export default TodoItem
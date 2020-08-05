import React from "react"
import {Card, Button, Container} from 'react-bootstrap/';

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
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration:"line-through"
    }

    return (
      <Container fluid>
        <Card border="dark" bg="light">
          <Card.Body>
            {this.props.text}
            <Button 
              onClick={this.handleClick} 
              className="float-right" 
              variant="danger">
                Delete
              </Button>{' '}
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default TodoItem
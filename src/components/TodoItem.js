import React from "react"
import {Card, Button, Container, Row, Col} from 'react-bootstrap/';

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {
      completed: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleClick(e) {
    this.props.handleDelete(this.props.id);
  }

  handleChange(e) {
    this.props.handleTick(this.props.id);
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
            <Row>
              <Col md={1}>
              <label className="container">
                <input 
                  type="checkbox" 
                  checked={this.props.completed}
                  onChange={this.handleChange}
                />
                <span class="checkmark"></span>
              </label>
              </Col>
              <Col md={10}>
                <p style={this.props.completed ? completedStyle : null}>
                  {this.props.text}
                </p>
              </Col>
              <Col md={1}>
                <Button 
                  onClick={this.handleClick} 
                  className="float-right" 
                  variant="danger">
                  Delete
                </Button>{' '}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default TodoItem
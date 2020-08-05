import React from "react"
import Form from "react-bootstrap/Form";
import {Button, Row, Col, Container} from "react-bootstrap/";
import { v4 as uuidv4 } from 'uuid';



class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({
      text: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.text === "" ? alert("Textbox is empty :/") :
    this.props.onSubmit(uuidv4(), this.state.text);
    this.setState({text: ""});
  }


  render() {
    return (
      <Container fluid="lg">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="11">
              <Form.Group controlId="newItemForm">
                <Form.Control value={this.state.text} type="text" placeholder="New Item" onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">Add</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default NewItem 
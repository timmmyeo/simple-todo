import React from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    this.state.text == "" ? alert("Textbox is empty :/") :
    this.props.onSubmit(this.state.text);
    this.setState({text: ""});
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="newItemForm">
            <Form.Control value={this.state.text} type="text" placeholder="New Item" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Add</Button>
        </Form>
      </div>
    )
  }
}

export default NewItem 
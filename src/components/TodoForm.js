import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  submit = e => {
    e.preventDefault();
    console.log("Prevented submittal")
    this.props.addItem({ task: this.state.text, id: Date.now(), completed: false });
    this.setState({ text: "" });
  }

  input = e => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" name="item" id="item" value={this.state.text} onChange={this.input} />
        <input type="submit" value="Add Item" onClick={this.submit} />
        <input type="button" value="Clear Completed" onClick={this.props.clearCompleted} />
      </form>
    )
  }
}
